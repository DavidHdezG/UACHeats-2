//Queue multiple loading bars if the button is clicked more than once.
//Loading bar N starts animating with loading bar N-1 is done animating.

import "./styles.css";

const divEl = document.querySelector("#progress-bar > div");
const startEl = document.querySelector("#start");
const messageEl = document.querySelector("#message");
let startTimerId = null;
const queue = [];

const onStartClick = () => {
  render();
  queue.push(3000);
  if (startTimerId) {
    return;
    //clearInterval(startTimerId);
    //divEl.classList.remove("loading");
    //triggers reflow
    //void divEl.offsetWidth;
  }
  startTimer();
};

const startTimer = () => {
  const timeout = queue.shift();
  divEl.classList.add("loading");
  startTimerId = setTimeout(() => {
    startTimerId = null;
    divEl.classList.remove("loading");
    void divEl.offsetWidth;
    render();
    if (queue.length > 0) {
      startTimer();
    }
  }, timeout);
};

const render = () => {
  messageEl.textContent = `Queued tasks: ${queue.length}`;
};

startEl.addEventListener("click", onStartClick);
