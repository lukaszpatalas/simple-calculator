const numberButtons = document.querySelectorAll('[number-button]');
const operatorButtons = document.querySelectorAll('[operator-button]');
const lowerDisplay = document.querySelector('#lowerDisplay');
const upperDisplay = document.querySelector('#upperDisplay');
const equalButton = document.querySelector('[equal-button]');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#delete');


let firstNumber = '';
let secondNumber = '';
let currentOperator = undefined;
let resetScreen = false;
let operatorClickedAgain = false;
let clickedZero = false;

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
    if (currentOperator !== undefined && operatorClickedAgain === false && clickedZero === false) {
        prepare();
    }
    if (lowerDisplay.textContent === "0" && upperDisplay.textContent.length !== 0) {
        currentOperator = operator;
        upperDisplay.innerText = firstNumber + " " + currentOperator;
    } else {
        firstNumber = lowerDisplay.textContent;
        currentOperator = operator;
        upperDisplay.innerText = firstNumber + " " + currentOperator;
    }
    resetScreen = true;
    clickedZero = false;
}

const prepare = function () {
    if (currentOperator === undefined) return;
    if (resetScreen === true) return;
    secondNumber = lowerDisplay.textContent;
    if (secondNumber === "0" && currentOperator === "÷") {
        alert("You can`t divide number by 0!");
        clickedZero = true;
        return;
    }
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
    clickedZero = false;
}

const deleteNumber = function () {
    lowerDisplay.textContent = lowerDisplay.textContent
        .toString()
        .slice(0, -1);
    if (lowerDisplay.textContent.length === 0) {
        lowerDisplay.textContent = 0;
    }
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

clearButton.addEventListener('click', () => {
    clear();
})

deleteButton.addEventListener('click', () => {
    deleteNumber();
})

document.addEventListener('keydown', (event) => {
    let button = event.key;
    const key = document.querySelector(`button[data-key="${button}"]`);
    if (!key && button !== 'Enter') {
        return;
    }
    else {
        if (button === 'Enter') {
            prepare();
            if (currentOperator === undefined) {
                resetScreen = true;
            }
        } else if (key.hasAttribute('number-button')) {
            appendNumber(key.innerText);
            operatorClickedAgain = false;
        } else if (key.hasAttribute('operator-button')) {
            chooseOperator(key.innerText);
            operatorClickedAgain = true;
        } else if (key.hasAttribute('equal-button')) {
            prepare();
            if (currentOperator === undefined) {
                resetScreen = true;
            }
        }
    }
}, false);

// 1. Add functionality to clear button *** DONE ***
// 2. Add functionality to delete button *** DONE ***
// 3. Add message when user tries to divide by 0 *** DONE ***
// 4. Add keyboard support
// 5. Add support for enter