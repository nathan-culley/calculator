//functions for basic arithmetic operations
function add(a,b) {
    return (a + b);
};

function subtract(a,b) {
    return (a - b);
};

function multiply(a,b) {
    return (a * b);
};

function divide(a,b) {
    return (a / b);
};

//calls the arithmetic functions
function operate(operator, a, b) {
    if (operator == "plus") {
        return add(a,b);
    }
    if (operator == "minus") {
        return subtract(a,b);
    }
    if (operator == "times") {
        return multiply(a,b);
    }
    if (operator == "dividedBy") {
        return divide(a,b);
    }
}

//sets variables for each button
/* const num9 = document.getElementById('9');
const num8 = document.getElementById('8');
const num7 = document.getElementById('7');
const num6 = document.getElementById('6');
const num5 = document.getElementById('5');
const num4 = document.getElementById('4');
const num3 = document.getElementById('3');
const num2 = document.getElementById('2');
const num1 = document.getElementById('1');
const num0 = document.getElementById('0');

const plus = document.getElementById('add');
const minus = document.getElementById('subtract');
const times = document.getElementById('multiply');
const dividedBy = document.getElementById('divide');
const backspace = document.getElementById('backspace');
const period = document.getElementById('period');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals'); */

//sets operand and result variables and current state of calculation
let firstOperand = "";
let secondOperand = "";
let operator = "";
let result;
let assignment = "first";
let opComplete = "false";


//adds event listeners to buttons
if (document.addEventListener) {
    document.addEventListener("click", handleClick, false);
}
else if (document.attachEvent) {
    document.attachEvent("onclick", handleClick);
}

function handleClick(event) {
    event = event || window.event;
    event.target = event.target || event.srcElement;
    var element = event.target;
    while (element) {
        if (element.nodeName === "BUTTON" && /number/.test(element.className)) {
            assignNumber(element);
            break;
        }
        if (element.nodeName === "BUTTON" && /operator/.test(element.className)) {
            assignOperator(element);
            break;
        }
        if (element.nodeName === "BUTTON" && /equals/.test(element.className)) {
            performOperation(element);
            break;
        }
        element = element.parentNode;
    }
}

function assignNumber(button) {
    let digit = button.id;
    if (assignment == "first" && opComplete == "false") {
        //console.log(digit);
        firstOperand = firstOperand + digit;
        console.log(firstOperand);
    }
    else if (assignment == "second") {
        secondOperand = secondOperand + digit;
        console.log(secondOperand);
    }
}

function assignOperator(button) {
    if (assignment == "first" || opComplete == "true") {
        operator = button.id;
        console.log(operator);
        assignment = "second";
        console.log(assignment);
    }
}

function performOperation(button) {
    //convert operands from strings to numbers
    firstOperand = +firstOperand;
    secondOperand = +secondOperand;
    //perform operation and display result
    result = operate(operator,firstOperand,secondOperand);
    console.log(result);
    //reset for next calculation
    firstOperand = result;
    opComplete = "true";
    assignment = "second";
    firstOperand = firstOperand.toString();
    secondOperand = "";
}