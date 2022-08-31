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
    upperDisplay.textContent = currentValue + " " + this.textContent;
    currentOperator = this.textContent;
}

let numberButton = document.querySelectorAll('.number');
let operatorButton = document.querySelectorAll('.operator');
let lowerDisplay = document.querySelector('.lowerDisplay p');
let upperDisplay = document.querySelector('.upperDisplay p');
let currentValue = 0;
let currentOperator = null;

// Check if you can make one for loop that create addEventListener for all types of buttons

for (number of numberButton) {
    number.addEventListener('click', populateLowerDisplay);
}

for (operator of operatorButton) {
    operator.addEventListener('click', populateUpperDisplay);
}
