
const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value)
}

function add() {
    const enteredNumber = getUserInput()
    const description = `${currentResult} + ${enteredNumber}`
    currentResult = currentResult.toString() + enteredNumber
    // currentResult = currentResult + +userInput.value
    outputResult(currentResult, description)
    // alert('Hi there!') // Unreachable Code
}

addBtn.addEventListener('click', add)


let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;


