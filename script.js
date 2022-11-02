//sets global variables
let firstOperand = "";
let secondOperand = "";
let operator = "";
let result;
let assignment = "first";
let opComplete = "false";

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
        if (element.nodeName === "BUTTON" && /clear/.test(element.className)) {
            clearAll(element);
            break;
        }
        element = element.parentNode;
    }
}

function assignNumber(button) {
    let digit = button.id;
    if (opComplete == "true" && operator == "") {
        console.log("select an operator");
    }
    else if (assignment == "first" && opComplete == "false") {
        //console.log(digit);
        firstOperand = firstOperand + digit;
        console.log(firstOperand);
        document.getElementById("display").innerHTML = firstOperand;
    }
    else if (assignment == "second") {
        secondOperand = secondOperand + digit;
        console.log(secondOperand);
        document.getElementById("display").innerHTML = firstOperand + operator + secondOperand;
    }
}

function assignOperator(button) {
    if (assignment == "first" || opComplete == "true") {
        operator = button.id;
        console.log(operator);
        assignment = "second";
        console.log(assignment);
        document.getElementById("display").innerHTML = firstOperand + operator;
    }
}

function performOperation(button) {
    //convert operands from strings to numbers
    firstOperand = +firstOperand;
    secondOperand = +secondOperand;
    //perform operation and display result
    result = operate(operator,firstOperand,secondOperand);
    console.log(result);
    document.getElementById("display").innerHTML = result;
    //reset for next calculation
    firstOperand = result;
    opComplete = "true";
    assignment = "second";
    firstOperand = firstOperand.toString();
    secondOperand = "";
    operator = "";
}

function clearAll(button) {
    console.log("clear");
    firstOperand = "";
    secondOperand = "";
    operator = "";
    result;
    assignment = "first";
    opComplete = "false";
    document.getElementById("display").innerHTML = "";
}