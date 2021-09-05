
const defaultResult = 0;

let currentResult = defaultResult;

//currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`; // backticks "template lateral"
let errorMessage = 'An error \n'
+ ' occurred!'


add(1, 2)
add(5, 5)

currentResult = add(15,15)

outputResult(currentResult, calculationDescription)

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}
