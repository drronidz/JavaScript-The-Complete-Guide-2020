
const defaultResult = 0;

let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`; // backticks "template lateral"
let errorMessage = 'An error \n'
+ ' occurred!'

outputResult(currentResult, calculationDescription)

add(1, 2)
add(5, 5)

function add(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber
    alert('The result is ' + result)
}