
let display = document.getElementById('display');
let currentExpression = '';

function appendToDisplay(value) {
    currentExpression += value;
    display.value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    display.value = '';
}
function deleted(){
    currentExpression=currentExpression.slice(0,-1);
    display.value=currentExpression;
}

function calculateResult() {
    try {
        currentExpression = eval(currentExpression); // Evaluate the expression
        display.value = currentExpression;
    } catch (error) {
        display.value = 'Error';
        currentExpression = '';
    }
}