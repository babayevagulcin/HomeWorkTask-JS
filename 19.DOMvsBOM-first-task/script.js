let start = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");
let icrement = document.querySelector(".icrement-btn");
let decrement = document.querySelector(".decrement-btn");
let reset = document.querySelector(".reset-btn");
let result = document.querySelector("#result");
let count = 0;
let interval;
start.addEventListener("click", function () {
    clearInterval(interval)
  interval = setInterval(() => {
    count++;
    result.innerText = count;
  }, 1000);
});
icrement.addEventListener("click", function () {
    clearInterval(interval)
  interval = setInterval(() => {
    count++;
    result.innerText = count;
  }, 1000);
});
decrement.addEventListener("click", function () {
    clearInterval(interval)
  interval = setInterval(() => {
    count--;
    result.innerText = count;
  }, 1000);
});
stopBtn.addEventListener("click", function () {
  clearInterval(interval);
});
reset.addEventListener("click", function () {
  result.innerText = 0;
  count = 0;
  clearInterval(interval);
});
