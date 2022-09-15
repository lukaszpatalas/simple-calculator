const numberButtons = document.querySelectorAll('[number-button]');
const operatorButtons = document.querySelectorAll('[operator-button]');
const lowerDisplay = document.querySelector('#lowerDisplay');
const upperDisplay = document.querySelector('#upperDisplay');
const equalButton = document.querySelector('[equal-button]');

let firstNumber = '';
let secondNumber = '';
let currentOperator = undefined;
let resetScreen = false;
let operatorClickedAgain = false;

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

const appendNumber = function (number) {
    if (number === '.' && lowerDisplay.textContent.includes('.')) return;
    if (resetScreen === true) {
        reset();
    }
    if (lowerDisplay.textContent === "0" && number !== '.') {
        reset();
    }
    lowerDisplay.textContent += number.toString();
}

const reset = function () {
    lowerDisplay.textContent = '';
    resetScreen = false;
}

const chooseOperator = function (operator) {
    if (currentOperator !== undefined && operatorClickedAgain === false) {
        prepare();
    }
    firstNumber = lowerDisplay.textContent;
    currentOperator = operator;
    upperDisplay.innerText = firstNumber + " " + currentOperator;
    resetScreen = true;
}

const prepare = function () {
    if (currentOperator === undefined) return;
    if (resetScreen === true) return;
    secondNumber = lowerDisplay.textContent;
    lowerDisplay.textContent = Math.round(operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber)) * 1000) / 1000;
    upperDisplay.textContent = firstNumber + " " + currentOperator + " " + secondNumber + " " + "=";
    currentOperator = undefined;
}

const clear = function () {
    lowerDisplay.textContent = '0';
    upperDisplay.textContent = '';
    firstNumber = '';
    secondNumber = '';
    currentOperator = undefined;
    resetScreen = false;
    operatorClickedAgain = false;
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        operatorClickedAgain = false;
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperator(button.innerText);
        operatorClickedAgain = true;
    })
})

equalButton.addEventListener('click', () => {
    prepare();
    if (currentOperator === undefined) {
        resetScreen = true;
    }
})

// 1. Add functionality to clear button
// 2. Add functionality to delete button
// 3. Add message when user tries to divide by 0
// 4. Add keyboard support