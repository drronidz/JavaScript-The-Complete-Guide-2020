
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

function add() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult += enteredNumber
    createAndWriteLog('+', initialResult, enteredNumber)
    writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult -= enteredNumber
    createAndWriteLog('-', initialResult, enteredNumber)
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

function multiply() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult *= enteredNumber
    createAndWriteLog('*', initialResult, enteredNumber)
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}

function divide() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult /= enteredNumber
    createAndWriteLog('/', initialResult, enteredNumber)
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

//
// alert(++currentResult) // return the value after it changed
// alert(currentResult++) // return the value before it changed
//

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)


