
const defaultResult = 0;
let currentResult = defaultResult;

function add(numberOne, numberTwo) {
    return numberOne + numberTwo
    // alert('Hi there!') // Unreachable Code
}

alert(add(1, 2))

currentResult = add(1, 2)

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription)

