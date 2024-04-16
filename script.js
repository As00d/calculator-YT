// BUG User should not be allowed to do like 8****9 meaning multiple operator at once
const userInput = document.getElementById("userInput");
let expression = "";

const press = function (value) {
  expression += value;
  userInput.value = expression;
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
