const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const display = document.querySelector('.display p');
const equalButton = document.querySelector('.equal');
let currentNumber = '';
let previousNumber = '';
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
    currentNumber = computation;
    previousNumber = '';
    console.log(currentNumber);
}

const updateDisplay = function () {
    if (lastOperation === true) {
        if (previousNumber === '') {
            display.innerText = currentNumber;
        } else {
            display.innerText = previousNumber;
        }
    }
    else if (firstOperation === true) {
        display.innerText = currentNumber;
    } else if (currentOperator !== undefined) {
        display.innerText = previousNumber + " " + currentOperator + " " + currentNumber;
    }
}

const appendNumber = function (number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber = currentNumber.toString() + number.toString();
}

const chooseOperator = function (operator) {
    firstOperation = false;
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        operate(currentOperator, parseFloat(previousNumber), parseFloat(currentNumber));
    }
    currentOperator = operator;
    previousNumber = currentNumber;
    currentNumber = '';
}

const clear = function () {
    currentNumber = '';
    previousNumber = '';
    currentOperator = undefined;
    firstOperation = true;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        updateDisplay();
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperator(button.innerText);
        updateDisplay();
    })
})

equalButton.addEventListener('click', () => {
    finishOperation();
})