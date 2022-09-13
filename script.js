const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const display = document.querySelector('.display p');
const equalButton = document.querySelector('.equal');
let firstNumber = '';
let secondNumber = '';
let currentOperator = undefined;
let firstOperation = true;
let lastOperation = false;

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
    let computation = 0;
    if (operator === "+") {
        computation = add(num1, num2);
    } else if (operator === "-") {
        computation = subtract(num1, num2);
    } else if (operator === "×") {
        computation = multiply(num1, num2);
    } else if (operator === "÷") {
        computation = divide(num1, num2);
    } else {
        console.log("Improper operator, try again.");
    }
    firstNumber = computation;
    secondNumber = '';
}

const appendNumber = function (number) {
    if (number === '.' && firstNumber.includes('.')) return;
    firstNumber = firstNumber.toString() + number.toString();
}

const chooseOperator = function (operator) {
    firstOperation = false;
    if (secondNumber !== '') {
        operate(currentOperator, parseFloat(secondNumber), parseFloat(firstNumber));
    }
    currentOperator = operator;
    display.innerText = firstNumber + " " + currentOperator;
}

const clear = function () {
    firstNumber = '';
    secondNumber = '';
    currentOperator = undefined;
    firstOperation = true;
}

const finishOperation = function () {
    if (firstNumber === '') return;
    if (secondNumber !== '') {
        operate(currentOperator, parseFloat(secondNumber), parseFloat(firstNumber));
    }
    secondNumber = firstNumber;
    firstNumber = '';
    lastOperation = true;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperator(button.innerText);
    })
})

equalButton.addEventListener('click', () => {
    finishOperation();
    clear();
})