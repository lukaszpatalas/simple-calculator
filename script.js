let buttons = document.querySelectorAll('button');
let lowerDisplay = document.querySelector('.lowerDisplay p');
let upperDisplay = document.querySelector('.upperDisplay p');
let number1 = null;
let number2 = null;
let currentOperator = null;

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

const setNumber1 = function(num) {
    number1 = num;
}

const setNumber2 = function(num) {
    number2 = num;
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

const populateLowerDisplay = function (button) {
    lowerDisplay.textContent = this.textContent;
    if (number1 === null) {
        number1 = parseInt(this.textContent);
    } else {
        number2 = parseInt(this.textContent);
        number1 = operate(currentOperator, number1, number2);
    }
}

const populateUpperDisplay = function (button) {
    currentOperator = this.textContent;
    upperDisplay.textContent = number1 + " " + currentOperator;
}

for (button of buttons) {
    if (button.className === "number") {
        button.addEventListener('click', populateLowerDisplay);
    } else if (button.className === "operator") {
        button.addEventListener('click', populateUpperDisplay);
    }
}
