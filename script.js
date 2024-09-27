let op1 = 0;
let op2 = 0;
let operator = "";
let displayValue = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
      break;
  }
}

const buttonsContainer = document.querySelector(".buttons");

buttonsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("number")) {
    displayValue += e.target.textContent;
    document.querySelector("#display").textContent = displayValue;
  }
});
