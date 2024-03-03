let firstNum = "", secondNum = ""; //stored in string format until calculation time
let operation = 0; //1 = add, 2 = subtract, 3 = multiply, 4 = divide
let decimalPlaced = false; //false = decimal not yet entered, true = decimal entered (for given number the user is building)
let operationPlaced = false;

function numKeyPress(e) {
    //quality checking
    if (display.textContent.length >= 16) {return;}
    if (display.textContent == "ERROR") {
        display.textContent = "";
    }

    if (e.target.textContent != ".") { //if we're placing a number
        if (!operationPlaced) {firstNum += e.target.textContent;}
        else {secondNum += e.target.textContent;}
        display.textContent += e.target.textContent;
    }
    else if (!decimalPlaced) { //if we're placing a decimal and it's legit
        if (!operationPlaced) {firstNum += e.target.textContent;}
        else {secondNum += e.target.textContent;}
        display.textContent += e.target.textContent;
        //forgive me for repeating code there

        decimalPlaced = true;
    }
    else { //if try to place decimal with it already placed, throw error
        console.log("numkeypress error")
        throwError();
    }

}
function opKeyPress(e) {
    if (display.textContent.length >= 16) {return;}

    if (firstNum == "") {
        throwError();
    }
    else if (!operationPlaced) {
        console.log(e.target.textContent);
        switch (e.target.textContent) {
            case '+':
                operation = 1;
                break;
            case '-':
                operation = 2;
                break;
            case 'x':
                operation = 3;
                break;
            case '÷':
                operation = 4;
                break;
        }
        display.textContent = display.textContent + e.target.textContent;
        operationPlaced = true;
    }
    else if (secondNum == "") {
        console.log("opkeypress error")
        throwError();
    }
    else {
        enterKeyPress();
        switch (e.target.textContent) {
            case '+':
                operation = 1;
                break;
            case '-':
                operation = 2;
                break;
            case 'x':
                operation = 3;
                break;
            case '÷':
                operation = 4;
                break;
        }
        display.textContent = display.textContent + e.target.textContent;
        operationPlaced = true;
    }
    
}
function clearKeyPress() {
    display.textContent = "";
    firstNum = "", secondNum = "";
    operation = 0;
    decimalPlaced = false;
    operationPlaced = false;
}
function enterKeyPress() {

    if (firstNum == "" || secondNum == "" || operation == 0) {
        throwError();
    }

    let temp = 0;
    switch (operation) {
        case 1:
            temp = parseFloat(firstNum) + parseFloat(secondNum);
            break;
        case 2:
            temp = parseFloat(firstNum) - parseFloat(secondNum);
            break;
        case 3:
            temp = parseFloat(firstNum) * parseFloat(secondNum);
            break;
        case 4:
            temp = parseFloat(firstNum) / parseFloat(secondNum);
            break;
        default:
            console.log("enterkeypress error")
            throwError();
    }

    if (temp % 1 == 0) {
        display.textContent = temp.toFixed(0);
    }
    else {
        display.textContent = parseFloat(temp.toFixed(10));
    }
    firstNum = display.textContent;
    secondNum = 0;
    operation = 0;
    decimalPlaced = false;
    operationPlaced = false;
}
function updateDisplay(string) {
    display.textContent = string;
}
function throwError() {
    clearKeyPress();
    display.textContent = "ERROR";
}

const numButtons = document.querySelectorAll('.number');
const opButtons = document.querySelectorAll('.operation');
const clearButton = document.querySelector('#clear');
const enterButton = document.querySelector('#enter');
const display = document.querySelector(".display");

numButtons.forEach((button) => {
    button.addEventListener('click', (e) => numKeyPress(e));
});
clearButton.addEventListener('click', clearKeyPress);
opButtons.forEach((button) => {
    button.addEventListener('click', (e) => opKeyPress(e));
});
enterButton.addEventListener('click', enterKeyPress);