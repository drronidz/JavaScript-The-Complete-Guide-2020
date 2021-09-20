function add(numberOne, numberTwo) {
    return numberOne + numberTwo
}

console.log(add(1, 5))
console.log(add(12, 15))

function addRandom(number) {
    return number + Math.random()
}

console.log(addRandom(5))

let previousResult = 0

function addMoreNumbers(numberOne, numberTwo) {
    const sum = numberOne + numberTwo
    previousResult = sum // side effect
    return sum
}

console.log(addMoreNumbers(1,5))

const hobbies = ['Sports', 'Cooking']

function printHobbies(hobbies) {
    hobbies.push('New HOBBY')
    console.log(hobbies)
}

printHobbies(hobbies)

//
function createTaxCalculator(tax) {
    function calculateTax(amount) {
        return amount * tax
    }
    return calculateTax
}

const calculateVatAmount = createTaxCalculator(0.19)
const calculateIncomeTaxAmount = createTaxCalculator(0.25)

console.log(calculateVatAmount(100))
console.log(calculateIncomeTaxAmount(200))