const userInput = document.getElementById("userInput");
let expression = "";

const press = function (value) {
  if (expression === "") {
    if (value === "-" || value === "+" || value === "*" || value === "/") {
    } else {
      expression += value;
      userInput.value = expression;
    }
  } else {
    let lastElement = expression[expression.length - 1];
    if (
      (lastElement === "+" ||
        lastElement === "*" ||
        lastElement === "/" ||
        lastElement === "-") &&
      (value === "+" || value === "*" || value === "/" || value === "-")
    ) {
      let newExpression =
        expression.substring(0, expression.length - 1) + value;
      userInput.value = newExpression;
      expression = newExpression;
    } else {
      expression += value;
      userInput.value = expression;
    }
  }
};

const equal = function () {
  if (expression !== "") {
    userInput.value = eval(expression);
  }
  expression = userInput.value;
};

const erase = function () {
  expression = "";
  userInput.value = expression;
};
