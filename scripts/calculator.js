function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 != 0) {
        return num1 / num2;
    } else {
        return 0;
    }
    

}

function operate (operator, num1, num2) {

    num1 = Number(num1);
    num2 = Number(num2);

    switch (operator) {
        case ("+"):
            return add(num1,num2);           
        case ("-"):
            return subtract(num1,num2);            
        case ("*"):
            return multiply(num1,num2);            
        case ("/"):
            return divide(num1,num2);            
    }

}


function clearCalculator() {   
    previousNumber = undefined;
    currentNumber = undefined;
    currentOperator = undefined;
    prevResult = undefined;
    // CALC_HISTORY.innerHTML = "";
    CALC_OUTPUT.innerHTML = 0;
}




const CALC_NUMBER = document.querySelectorAll(".number");
const CALC_OPERATOR = document.querySelectorAll(".operator");
const CALC_EQUALS = document.querySelector("#calc-equals");
const CALC_DELETE = document.querySelector("#calc-delete");
const CALC_CLEAR = document.querySelector("#calc-clear");
const CALC_OUTPUT = document.querySelector("#calc-output");
// const CALC_HISTORY = document.querySelector("#calc-history");

let previousNumber;
let currentNumber;
let currentOperator;
let prevResult;


for (i=0; i < CALC_NUMBER.length; i++) {
    CALC_NUMBER[i].addEventListener("click", function(event) {   
        let currentOutputValue = CALC_OUTPUT.innerHTML;
        let inputValue = event.target.innerHTML;
        let isPrevInputPoint = false;

        if (inputValue =="." && currentOutputValue.substr(currentOutputValue.length-1)==".") {
            isPrevInputPoint = true;
        }

 
        if (!prevResult && !isPrevInputPoint && (currentOutputValue !=0 || currentOutputValue == "0." || inputValue == ".")) {
            CALC_OUTPUT.innerHTML += inputValue;
        } else if (!isPrevInputPoint) {
            CALC_OUTPUT.innerHTML = inputValue;
        }
            




        
    });
}


for (i=0; i < CALC_OPERATOR.length; i++) {
    CALC_OPERATOR[i].addEventListener("click", function(event) {

        if (previousNumber !== undefined && currentOperator !== undefined) {
            currentNumber = CALC_OUTPUT.innerHTML;
                       
            let result = operate(currentOperator,previousNumber,currentNumber);

            
            CALC_OUTPUT.innerHTML = result;
            previousNumber = result;
            prevResult = result;

            currentOperator = event.target.innerHTML;
            

        } else {
            previousNumber = CALC_OUTPUT.innerHTML;
            currentOperator = event.target.innerHTML;
            CALC_OUTPUT.innerHTML = 0;
        }
        
    });
}


CALC_EQUALS.addEventListener("click", function() {
    if (previousNumber !== undefined && currentOperator !== undefined) {
        currentNumber = CALC_OUTPUT.innerHTML;
        let result = operate(currentOperator,previousNumber,currentNumber);

        
        CALC_OUTPUT.innerHTML = result;


    }
    

})


CALC_DELETE.addEventListener("click", function() {
    let currentOutputValue = CALC_OUTPUT.innerHTML;

    if (currentOutputValue.length > 1) {
        CALC_OUTPUT.innerHTML = CALC_OUTPUT.innerHTML.slice(0,-1);
    } else {
        CALC_OUTPUT.innerHTML = 0;
    }
    
})

CALC_CLEAR.addEventListener("click", function() {
    clearCalculator();
})











