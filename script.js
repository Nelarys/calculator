const DEVIDE_BY_ZERO_MESSAGE = "Who devides by zero is a fool!";

let op1 = null;
let op2 = null;
let displayingRes = false;
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
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      if (b === 0) return DEVIDE_BY_ZERO_MESSAGE;
      return divide(a, b);
    case "":
      return a;
  }
}

function display(value) {
  displayValue = value;
  document.querySelector("#display").textContent = displayValue;
}

function calculate() {
  if (op1 !== null) {
    op2 = op2 === null ? +displayValue : op2;
    op1 = operate(op1, op2, operator);
    displayingRes = true;
    display(String(op1));
    if (op1 === DEVIDE_BY_ZERO_MESSAGE) reset();
  }
}

function reset() {
  op1 = null;
  op2 = null;
  operator = "";
}

function clear() {
  reset();
  display("");
}

const buttonsContainer = document.querySelector(".buttons");

// Delegate the button clicks
buttonsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("number")) {
    if (displayingRes) {
      display("");
      displayingRes = false;
    }
    display(displayValue + e.target.textContent);
    op2 = null;
  } else if (e.target.classList.contains("operator")) {
    if (op1 === null) {
      operator = e.target.id;
      op1 = +displayValue;
      display("");
    } else {
      if (!displayingRes) {
        calculate();
        op2 = null;
      }
      operator = e.target.id;
    }
  } else if (e.target.classList.contains("equals")) {
    if (displayValue !== "") calculate();
  } else if (e.target.classList.contains("clear")) {
    clear();
  }
});
