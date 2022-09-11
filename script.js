const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const display = document.querySelector('.display p');
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

const updateDisplay = function () {
    display.innerText = currentNumber;
}

const appendNumber = function (number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber = currentNumber.toString() + number.toString();
}

const chooseOperator = function (operator) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        operate(currentOperator, currentNumber, previousNumber);
    }
    currentOperator = operator;
    previousNumber = currentNumber;
    currentNumber = '';
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        updateDisplay(button.innerText);
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperator(button.innerText);
        updateDisplay();
    })
})
