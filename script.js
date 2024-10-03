let op1 = null;
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
  op1 = operate(op1, +displayValue, operator);
  operator = "";
  displayingRes = true;
  display(String(op1));
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
  } else if (e.target.classList.contains("operator")) {
    if (op1 === null) {
      operator = e.target.id;
      op1 = +displayValue;
      display("");
    } else {
      calculate();
      operator = e.target.id;
    }
  } else if (e.target.classList.contains("equals")) {
    calculate();
  } else if (e.target.classList.contains("clear")) {
    op1 = null;
    operator = "";
    display("");
  }
});
