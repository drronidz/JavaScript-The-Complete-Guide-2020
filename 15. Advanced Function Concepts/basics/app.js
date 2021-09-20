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