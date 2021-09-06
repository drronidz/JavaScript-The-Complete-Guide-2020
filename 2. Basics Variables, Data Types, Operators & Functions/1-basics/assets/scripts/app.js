
const defaultResult = 0;
let currentResult = defaultResult;

// This is a function that extracts the user input from the input field
function getUserInput() {
    return parseInt(userInput.value)
}

// Generates and writes calculation log
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription) // from vendor file
}

function add() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult += enteredNumber
    createAndWriteLog('+', initialResult, enteredNumber)
}

function subtract() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult -= enteredNumber
    createAndWriteLog('-', initialResult, enteredNumber)
}

function multiply() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult *= enteredNumber
    createAndWriteLog('*', initialResult, enteredNumber)
}

function divide() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    currentResult /= enteredNumber
    createAndWriteLog('/', initialResult, enteredNumber)
}

alert(++currentResult) // return the value after it changed
alert(currentResult++) // return the value before it changed


addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)


