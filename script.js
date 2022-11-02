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
    if (operator == "+") {
        return add(a,b);
    }
    if (operator == "-") {
        return subtract(a,b);
    }
    if (operator == "*") {
        return multiply(a,b);
    }
    if (operator == "/") {
        return divide(a,b);
    }
}

//sets variables for each button
const num9 = document.getElementById('9');
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
const equals = document.getElementById('equals');

//sets operand and result variables and current state of calculation
let firstOperand = "";
let secondOperand = "";
let result;
let firstAssignment = true;
let secondAssignment = false;


//adds event listeners to number buttons
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
    // Climb up the document tree from the target of the event
    while (element) {
        if (element.nodeName === "BUTTON" && /number/.test(element.className)) {
            // The user clicked on a <button> or clicked on an element inside a <button>
            // with a class name called "foo"
            assignNumber(element);
            break;
        }
        element = element.parentNode;
    }
}
function assignNumber(button) {
    console.log(button.id);
    if (secondAssignment = false) {
        let digit = button.id;
        console.log(digit);

    }
}