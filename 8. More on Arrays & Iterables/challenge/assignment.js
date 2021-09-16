const numbers = [1, 2, 3,4 , 5, 6, 7]

const numsGreater5 = numbers.filter(value => {
    return value > 5
})

console.log('Numbers greater than 5 are : ', numsGreater5)

const mappedNumbers = numbers.map(value => ({
    num : value
}))

console.log(mappedNumbers)

const multiplication = numbers.reduce((currentResult, currentValue) => {
    return currentResult * currentValue
},1)

console.log(multiplication)

function findMax(...numbers) {
    let currentMax = numbers[0]
    let currentMin = numbers[0]
    for (const number of numbers) {
        if (number > currentMax) {
            currentMax = number
        }
        if (number < currentMin) {
            currentMin = number
        }
    }
    return [currentMax, currentMin]
}

// console.log(`
// The max number of numbers is : ${findMax(...numbers) [0]}
// &
// The min number of numbers is : ${findMax(...numbers) [1]}
// `)

const [min, max] = findMax(...numbers)
console.log(
    'The min is : ', min,
    'The max is : ', max)

const userIds = new Set()
userIds.add(10)
userIds.add(-5)
userIds.add(-5)

console.log(userIds)