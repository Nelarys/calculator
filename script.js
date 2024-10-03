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
    case "":
      return a;
      break;
  }
}

function display(value) {
  displayValue = value;
  document.querySelector("#display").textContent = displayValue;
}

function calculate() {
  op2 = op2 === null ? +displayValue : op2;
  op1 = operate(op1, op2, operator);
  displayingRes = true;
  display(String(op1));
}

function clear() {
  op1 = null;
  op2 = null;
  operator = "";
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
    calculate();
  } else if (e.target.classList.contains("clear")) {
    clear();
  }
});
