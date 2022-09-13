const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const lowerDisplay = document.querySelector('.lowerDisplay');
const upperDisplay = document.querySelector('.upperDisplay');
const equalButton = document.querySelector('.equal');
let firstNumber = '';
let secondNumber = '';
let currentOperator = undefined;
let firstOperation = true;
let lastOperation = false;
let resetScreen = false;

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
    if (number === '.' && lowerDisplay.textContent.includes('.')) return;
    if (resetScreen === true) {
        reset();
    }
    if (lowerDisplay.textContent === "0") {
        reset();
    }
    lowerDisplay.textContent += number.toString();
}

const reset = function () {
    lowerDisplay.textContent = '';
    resetScreen = false;
}

const chooseOperator = function (operator) {
    if (secondNumber !== '') {
        operate(currentOperator, parseFloat(secondNumber), parseFloat(firstNumber));
    }
    firstNumber = lowerDisplay.textContent;
    currentOperator = operator;
    upperDisplay.innerText = firstNumber + " " + currentOperator;
    lowerDisplay.innerText = firstNumber;
    resetScreen = true;
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
