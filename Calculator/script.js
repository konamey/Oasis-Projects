let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('result').value = displayValue;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function calculateSquareRoot() {
    try {
        displayValue = Math.sqrt(eval(displayValue)).toString();
        document.getElementById('result').value = displayValue;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = '';
}
