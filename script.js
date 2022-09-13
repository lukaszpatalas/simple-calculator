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

const updateDisplay = function () {
    if (lastOperation === true) {
        if (firstNumber === '') {
            display.innerText = "0";
        } else if (secondNumber === '') {
            display.innerText = firstNumber;
        }
        else {
            display.innerText = secondNumber;
        }
    }
    else if (firstOperation === true) {
        display.innerText = firstNumber;
    } else if (currentOperator !== undefined) {
        display.innerText = secondNumber + " " + currentOperator + " " + firstNumber;
        console.log(currentOperator);
    }
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
    secondNumber = firstNumber;
    firstNumber = '';
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
    updateDisplay();
    clear();
})