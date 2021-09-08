
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []

// This is a function that extracts the user input from the input field
function getUserInput() {
    return parseInt(userInput.value)
}

// Generates and writes calculation log
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription) // from vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation : operationIdentifier,
        prevResult : prevResult,
        number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry)
    console.log(logEntry.operation)
    console.log(logEntries)
}

function calculationResult(calculationType) {
    if(
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE'
    ) {
        return
    }

    if(
        calculationType === 'ADD' ||
        calculationType === 'SUBTRACT' ||
        calculationType === 'MULTIPLY' ||
        calculationType === 'DIVIDE'
    )

    const enteredNumber = getUserInput()
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber
        mathOperator = '/';
    }
    createAndWriteLog(mathOperator, initialResult, enteredNumber)
    writeToLog(calculationType, initialResult, enteredNumber, currentResult)
}

function add() {
   calculationResult('ADD')
}

function subtract() {
    calculationResult('SUBTRACT')
}

function multiply() {
    calculationResult('MULTIPLY')
}

function divide() {
   calculationResult('DIVIDE')
}

//
// alert(++currentResult) // return the value after it changed
// alert(currentResult++) // return the value before it changed
//

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)


