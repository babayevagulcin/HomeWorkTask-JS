let resultInput = document.querySelector("#result");
let value1Input = document.querySelector("#value1");
let value2Input = document.querySelector("#value2");
let additionBtn = document.querySelector(".addition-btn");
let substractBtn = document.querySelector(".substract-btn");
let multiplyBtn = document.querySelector(".multiply-btn");
let divisionBtn = document.querySelector(".division-btn");
let resetBtn = document.querySelector(".reset-btn");

let resultValue;
additionBtn.addEventListener("click", () => {
  resultValue = +value1Input.value + +value2Input.value;
  resultInput.innerText = resultValue;
  if (value1Input.value === "" || value2Input.value === "") {
    alert("Enter number");
  }
});
substractBtn.addEventListener("click", function () {
    resultValue = +value1Input.value - +value2Input.value;
    resultInput.innerText = resultValue;
    if (value1Input.value === "" || value2Input.value === "") {
      alert("Enter number");
    }
});
multiplyBtn.addEventListener("click", function () {
  resultValue = +value1Input.value * +value2Input.value;
  resultInput.innerText = resultValue;
  if (value1Input.value === "" || value2Input.value === "") {
    alert("Enter number");
  }
});
divisionBtn.addEventListener("click", function () {
  resultValue = +value1Input.value / +value2Input.value;
  resultInput.innerText = resultValue;
  if (value1Input.value === "" || value2Input.value === "") {
    alert("Enter number")
  }
  if (value2Input.value === "0") {
    resultInput.innerText = "Error";
  }
});
resetBtn.addEventListener("click", function () {
  value1Input.value = "";
  value2Input.value = "";
  resultInput.innerText = "0";
});
