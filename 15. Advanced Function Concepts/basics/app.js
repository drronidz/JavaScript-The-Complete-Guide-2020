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
let multiplier = 1.1

function createTaxCalculator(tax) {
    function calculateTax(amount) {
        console.log(multiplier)
        return amount * tax * multiplier
    }
    return calculateTax
}

const calculateVatAmount = createTaxCalculator(0.19)
const calculateIncomeTaxAmount = createTaxCalculator(0.25)

multiplier = 1.2

console.log(calculateVatAmount(100))
console.log(calculateIncomeTaxAmount(200))

// Closure in practice

let userName = 'John'

function greetUser() {
    let name = 'Anna' // shadowing ...
    console.log('Hi ' + name)
}

let name = 'Joe'
userName= 'Manual'

greetUser()

// Closure & memory management

// Recursion

function powerOf(x, n) {
    return n === 1 ? x : x * powerOf(x, n - 1)
}

console.log(powerOf(2,3)) // 2 * 2 * 2

// Advanced Recursion

const myself = {
    name: 'Max',
    friends: [
        {
            name: 'Manual',
            friends: [
                {
                    name: 'Chris',
                    friends: [
                        {
                            name: 'Harry'
                        },
                        {
                            name: 'Amelia'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Julia'
        }
    ]
}

function getFriendNames(person) {
   const collectedNames = []

    if (!person.friends) { // The condition that ends the loop !!
        return []
    } else {
        for (const friend of person.friends) {
            collectedNames.push(friend.name)
            collectedNames.push(...getFriendNames(friend))
        }
    }
    return collectedNames
}

console.log(getFriendNames(myself))
