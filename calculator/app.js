// Frontend calculator logic

let currentInput = '0';
let shouldResetDisplay = false;

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function appendNumber(number) {
    if (shouldResetDisplay || currentInput === '0') {
        currentInput = number;
        shouldResetDisplay = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(operator) {
    if (shouldResetDisplay) {
        shouldResetDisplay = false;
    }
    currentInput += operator;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    shouldResetDisplay = false;
    updateDisplay();
}

function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function calculate() {
    try {
        currentInput = String(eval(currentInput));
        shouldResetDisplay = true;
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        shouldResetDisplay = true;
        updateDisplay();
    }
}
// Initialize display
updateDisplay();

