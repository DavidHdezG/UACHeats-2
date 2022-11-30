const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Product = require('../models/product');

dotenv.config();

mongoose.connect(process.env.MONGO_DB_URL);

const product = [
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/baguete.jpg?raw=true',
        title: 'Baguete',
        description: "\n" +
            "Pan baguete relleno de crema philadelphia.",
        price: 25.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/bola_arroz.jpg?raw=true',
        title: 'Bola de Arroz',
        description: "\n" +
            "Bola de arroz con salsa anguila y chipotle.",
        price: 60.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/burritos/burrito_chipotle.jpg?raw=true',
        title: 'Burrito con Chipotle',
        description: "\n" +
            "Burrito relleno de chipotle.",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/burritos/burrito_chicharron.jpg?raw=true',
        title: 'Burrito de Chicharrón',
        description: "\n" +
            "Burrito relleno de chicharrón.",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/burritos/burrito_picadillo.jpg?raw=true',
        title: 'Burrito de Picadillo',
        description: "\n" +
            "Burrito relleno de picadillo.",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/burritos/burrito_asado.jpg?raw=true',
        title: 'Burrito de Asado',
        description: "\n" +
            "Burrito relleno de asado.",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/burritos/burrito_chillibeans.jpg?raw=true',
        title: 'Burrito de Chilly Beans',
        description: "\n" +
            "Burrito relleno de chilly beans.",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/burritos/burrito_mole.jpg?raw=true',
        title: 'Burrito de Mole',
        description: "\n" +
            "Burrito relleno de mole.",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/burritos/burrito_frijoles.jpg?raw=true',
        title: 'Burrito de Frijoles',
        description: "\n" +
            "Burrito relleno de frijoles.",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/montado.jpg?raw=true',
        title: 'Montado',
        description: "\n" +
            "Montado con el guiso de preferencia.",
        price: 30.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/sincronizada.jpg?raw=true',
        title: 'Sincronizada',
        description: "\n" +
            "Tortilla doblada con relleno.",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/tortas/torta_lomo.jpg?raw=true',
        title: 'Torta de Lomo',
        description: "\n" +
            "Torta con lomo.",
        price: 25.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/tortas/torta_jamon.png?raw=true',
        title: 'Torta de Jamón',
        description: "\n" +
            "Torta con jamón",
        price: 25.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/tortas/torta_salchicha.png?raw=true',
        title: 'Torta de Salchicha',
        description: "\n" +
            "Torta con salchicha",
        price: 25.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/chilaquiles.png?raw=true',
        title: 'Chilaquiles',
        description: "\n" +
            "Tortilla de maíz con chile colorado y queso.",
        price: 30.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/sandwich.jpg?raw=true',
        title: 'Sandwich',
        description: "\n" +
            "Pan con jamóm, lehcuga, tomate, etc.",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/hamburguesa.jpg?raw=true',
        title: 'Hamburguesa',
        description: "\n" +
            "Pan con carne, queso, tomate, lechuga y mayonesa.",
        price: 60.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/hotdog.png?raw=true',
        title: 'Hot Dog',
        description: "\n" +
            "Pan de hot dog, con winnie y condimentos.",
        price: 30.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/mollete_especial.jpg?raw=true',
        title: 'Moyete Especial',
        description: "\n" +
            "Moyete con el guiso de preferencia.",
        price: 40.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/mollete_sencillo.jpg?raw=true',
        title: 'Moyete Sencillo',
        description: "\n" +
            "Pan telera con mantequilla, frijoles y queso.",
        price: 30.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/platillo.jpg?raw=true',
        title: 'Platillo',
        description: "\n" +
            "Platillos variantes.",
        price: 40.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/fruta_verdura.jpg?raw=true',
        title: 'Fruta y Verdura',
        description: "\n" +
            "Trozos de fruta y verdura.",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/sushi.jpg?raw=true',
        title: 'Sushi',
        description: "\n" +
            "Rollitos maki con salsa anguila y chipotle.",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/bebida_coca.jpg?raw=true',
        title: 'Coca-Cola',
        description: "\n" +
            "Gaseosa sabor cola.",
        price: 22.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/bebida_agua.jpg?raw=true',
        title: 'Botella de Agua',
        description: "\n" +
            "Botella de agua.",
        price: 16.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/papitas_doritos.jpg?raw=true',
        title: 'Doritos',
        description: "\n" +
            "Doritos nacho.",
        price: 16.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/papitas_sabritas.jpg?raw=true',
        title: 'Sabritas',
        description: "\n" +
            "Sabritas original.",
        price: 16.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/papitas_ruffles_original.jpg?raw=true',
        title: 'Ruffles Original',
        description: "\n" +
            "Ruffles originales.",
        price: 16.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/papitas_ruffles_queso.jpg?raw=true',
        title: 'Ruffles Queso',
        description: "\n" +
            "Ruffles sabor queso.",
        price: 16.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/papitas_chips_jalapeno.jpg?raw=true',
        title: 'Chips Jalapeño',
        description: "\n" +
            "Papas fritas sabor jalapeño.",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/papitas_chips_fuego.jpg?raw=true',
        title: 'Chips Fuego',
        description: "\n" +
            "Papas fritas sabor chile.",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/papitas_chips_sal.jpg?raw=true',
        title: 'Chips Sal',
        description: "\n" +
            "Papas fritas y saladas.",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/papitas_cheetos_torciditos.jpg?raw=true',
        title: 'Cheetos Torciditos',
        description: "\n" +
            "Cheetos sabor queso y chile.",
        price: 16.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/papitas_cheetos_poffs.jpg?raw=true',
        title: 'Cheetos Poffs',
        description: "\n" +
            "Cheetos sabor queso.",
        price: 16.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/papitas_cheetos_bolita.jpg?raw=true',
        title: 'Cheetos Bolitas',
        description: "\n" +
            "Cheetos sabor queso y chile.",
        price: 16.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/papitas_cheetos_flamin.jpg?raw=true',
        title: 'Cheetos Flaming Hot',
        description: "\n" +
            "Cheetos sabor queso, chile y limón.",
        price: 16.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/papitas_tostitos_verdes.jpg?raw=true',
        title: 'Tostitos Salsa Verde',
        description: "\n" +
            "Tostitos sabor salsa verde.",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/papitas_tostitos_flamin.jpg?raw=true',
        title: 'Tostitos Extra Flaming Hot',
        description: "\n" +
            "Tostitos sabor chile y limón.",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/dulces_milkyway.jpg?raw=true',
        title: 'Mikyway',
        description: "\n" +
            "Chocolate",
        price: 20.00
    }),
    new Product({
        imagePath: 'https://github.com/JoseCChaparro/UACHEats2/blob/main/images/menu/Nuevas%20imagenes/dulces_paleta.jpg?raw=true',
        title: 'Paleta',
        description: "\n" +
            "Paleta de caramelo.",
        price: 9.00
    }),
];

let done = 0;

for (let i = 0; i < product.length; i++) {
    product[i].save(function(err, result) {
        done++;
        if(done === product.length)
            exit();
    });
}
function exit() {
    mongoose.disconnect();
}
