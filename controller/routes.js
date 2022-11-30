const express = require('express');
const router = express.Router();
const user = require('../model/user');
const bcryptjs = require('bcryptjs');
const passport = require('passport');
require('./passportLocal')(passport);
require('./googleAuth')(passport);
const userRoutes = require('./accountRoutes');
const Product = require('../models/product');
const Cart = require('../models/cart');

function checkAuth(req, res, next) {
    if (req.isAuthenticated()) {
        res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, post-check=0, pre-check=0');
        next();
    } else {
        req.flash('error_messages', "Por favor inicia sesion para continuar !");
        res.redirect('/login');
    }
}

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        res.render("index.ejs", { logged: true });//antes index
    } else {
        res.render("index.ejs", { logged: false });
    }
});

router.get('/login', (req, res) => {
    res.render("login.ejs", { csrfToken: req.csrfToken() });
});

router.get('/signup', (req, res) => {
    res.render("signup.ejs", { csrfToken: req.csrfToken() });
});

router.post('/signup', (req, res) => {
    // get all the values 
    const { email, username, password, confirmpassword } = req.body;
    // check if the are empty 
    if (!email || !username || !password || !confirmpassword) {
        res.render("signup.ejs", { err: "All Fields Required !", csrfToken: req.csrfToken() });
    } else if (password != confirmpassword) {
        res.render("signup.ejs", { err: "Password Don't Match !", csrfToken: req.csrfToken() });
    } else {

        // validate email and username and password 
        // skipping validation
        // check if a user exists
        user.findOne({ $or: [{ email: email }, { username: username }] }, function (err, data) {
            if (err) throw err;
            if (data) {
                res.render("signup", { err: "User Exists, Try Logging In !", csrfToken: req.csrfToken() });
            } else {
                // generate a salt
                bcryptjs.genSalt(12, (err, salt) => {
                    if (err) throw err;
                    // hash the password
                    bcryptjs.hash(password, salt, (err, hash) => {
                        if (err) throw err;
                        // save user in db
                        user({
                            username: username,
                            email: email,
                            password: hash,
                            googleId: null,
                            provider: 'email',
                        }).save((err, data) => {
                            if (err) throw err;
                            // login the user
                            // use req.login
                            // redirect , if you don't want to login
                            res.redirect('/login');
                        });
                    })
                });
            }
        });
    }
});

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/profile',
        failureFlash: true,
    })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy(function (err) {
        res.redirect('/');
    });
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email',] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/profile');
});

router.get('/profile', checkAuth, (req, res) => {
    // adding a new parameter for checking verification
    res.render('profile.ejs', { username: req.user.username, verified : req.user.isVerified });

});

//router.get('/menu', checkAuth, (req, res) => {
//    // adding a new parameter for checking verification
//    if (req.isAuthenticated()) {
//        res.render("menu.ejs", { logged: true, username: req.user.username, verified : req.user.isVerified});
//    } else {
//        res.render("menu.ejs", { logged: false , username: req.user.username, verified : req.user.isVerified});
//    }
//
//});

router.get('/menu', checkAuth, function(req, res, next) {
    const successMgs = req.flash('success')[0];
    
    //Product.find().then(objs => res.status(200).json({
    //    message: "Lista de actores",
    //    obj: objs
    //})).catch(ex => res.status(500).json({
    //    message: "No se pudo consutlar la informacion",
    //    obj:ex
    //}));
    Product.find(function(err, docs){
        const productChunks = [];
        const chunkSize = 3;
        console.log("iren banda el docs.len:",docs.length);
        for (let i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i  + chunkSize));
          
        }
        
        if(req.isAuthenticated()) {
            res.render('shop/index.hbs', { title: 'Carrito', products: productChunks, successMgs: successMgs, noMessage: !successMgs, logged: true, verified : req.user.isVerified });
        }
    }).lean();
});

router.get('/cart', function (req, res, next) {
    if(!req.session.cart) {
        return res.render('shop/cart.hbs', {products: null, logged : true, verified : req.user.isVerified});
    }
    const cart = new Cart(req.session.cart);
    return res.render('shop/cart.hbs', {products: cart.generateArray(), totalPrice: cart.totalPrice,  logged : true, verified : req.user.isVerified});
});

router.get('/cart/add-to-cart/:id', function (req, res) {
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function (err, product) {
        if(err) {
            return res.redirect('/menu');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/menu');
    })
});

router.get('/cart/reduce/:id', function (req, res, next) {
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/cart');
});

router.get('/cart/remove/:id', function (req, res, next) {
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/cart');
});
router.use(userRoutes);

module.exports = router;