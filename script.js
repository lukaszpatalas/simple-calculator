let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display p');
let currentNumber = '';
let previousNumber = '';
let currentOperator = undefined;

const add = function (num1, num2) {
    return num1 + num2;
};

const subtract = function (num1, num2) {
    return num1 - num2;
};

const multiply = function (num1, num2) {
    return num1 * num2;
};

const divide = function (num1, num2) {
    return num1 / num2;
};

const setCurrentNumber = function(num) {
    currentNumber = num;
}

const setPreviousNumber = function(num) {
    previousNumber = num;
}

const setOperator = function(operator) {
    currentOperator = operator;
}

const operate = function (operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "×") {
        return multiply(num1, num2);
    } else if (operator === "÷") {
        return divide(num1, num2);
    } else {
        console.log("Improper operator, try again.");
    }
}

const updateDisplay = function (button) {
    display.textContent = this.textContent;
}

for (button of buttons) {
    if (button.className === "number") {
        button.addEventListener('click', updateDisplay);
    } else if (button.className === "operator") {
        button.addEventListener('click', updateDisplay);
    }
}
