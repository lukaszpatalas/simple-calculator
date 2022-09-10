let buttons = document.querySelectorAll('button');
let lowerDisplay = document.querySelector('.lowerDisplay p');
let upperDisplay = document.querySelector('.upperDisplay p');
let currentValue = 0;
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

const operate = function (operator, num1, num2) {
    if (operator === "add") {
        return add(num1, num2);
    } else if (operator === "subtract") {
        return subtract(num1, num2);
    } else if (operator === "multiply") {
        return multiply(num1, num2);
    } else if (operator === "divide") {
        return divide(num1, num2);
    } else {
        console.log("Improper operator, try again.");
    }
}

const populateLowerDisplay = function (button) {
    lowerDisplay.textContent = this.textContent;
    currentValue = this.textContent;
}

const populateUpperDisplay = function (button) {
    currentOperator = this.textContent;
    upperDisplay.textContent = currentValue + " " + currentOperator;
}

for (button of buttons) {
    if (button.className === "number") {
        button.addEventListener('click', populateLowerDisplay);
    } else if (button.className === "operator") {
        button.addEventListener('click', populateUpperDisplay);
    }
}
