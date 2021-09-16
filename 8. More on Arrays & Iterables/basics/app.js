const numbers = [1, 2, 3]
console.log(numbers)

const moreNumbers = new Array() // []
const moreNumbers2 = ['Hi', 'Welcome']
console.log(moreNumbers2)


const yetMoreNumbers = Array.of(1, 2)
console.log(yetMoreNumbers)

const moreNumbers3 = Array.from([1, 2, 3])
console.log(moreNumbers3)

const listItems = document.querySelectorAll('li')
console.log(listItems)

// Type of Data that we can store on Array
const hobbies = ['Cooking','Sports']
const personalData = [30, 'Max', {moreDetail: []}]
console.log(personalData)
const analyticsData = [[1, 1.6], [-5.4, 2.1]]

for (const data of analyticsData) {
    for (const dataPoint of data) {
        console.log(dataPoint)
    }
}

console.log(personalData[1])

// Adding & removing elements from an array!
hobbies.push('Reading')
hobbies.unshift('Coding')
hobbies.pop()
hobbies.shift()
console.log(hobbies)

//
hobbies[1] = 'Coding'
hobbies[5] = 'Exploring' // rarely used

console.log(hobbies, hobbies[4])

//
const food = ['Sushi', 'Pizza', 'Tacos']

food.splice(0,0, 'Hamburger')
console.log(food)

food.splice(0,1)
console.log(food)

food.splice(-1, 1)
console.log(food)


//

const naturalNumbers = [1, 2, 3, 4, 5, 6]
let storedNaturalNumbers = naturalNumbers

naturalNumbers.push(7)

console.log(naturalNumbers, storedNaturalNumbers)

// new With slice() method (creating copy)

storedNaturalNumbers = naturalNumbers.slice()

naturalNumbers.push(8)

console.log(naturalNumbers, storedNaturalNumbers)

// a part of natural numbers

const aPartNaturalNumbers = naturalNumbers.slice(0, 5)
console.log(aPartNaturalNumbers)

// adding arrays to arrays with concat()

const realNumbers = [1.2,2.2,3.3,4.4]

const concatNaturalRealNumbers =  naturalNumbers.concat(realNumbers)
console.log(concatNaturalRealNumbers)

// retrieving Indexes with IndexOf() & lastIndexOf()
console.log(realNumbers.indexOf(1.2))
console.log(realNumbers.lastIndexOf(1.2))

const data = [{name : 'Max'}, {name: 'Manual'}]
console.log(data.indexOf({name : 'Max'})) // doesn't work with objects!!!

const manual = data.find((person) => {
    return person.name === 'Manual'
})
console.log(manual)

manual.name = 'Anna'

console.log(manual,data)

const maxIndex = data.findIndex((person) => {
    return person.name === 'Max'
})

console.log('Max index is : '+ maxIndex)

// include method

console.log(naturalNumbers.includes(5))
console.log(naturalNumbers.indexOf(5) !== -1)

// alternative to for Loops (forEach())

const prices = [10.99, 5.99, 3.99, 6.59]
const tax = 0.19
const pricesWithTax = []

// for (const price of prices) {
//     const finalPrice = price + (1 + tax)
//     pricesWithTax.push(parseFloat(finalPrice.toFixed(2)))
// }

prices.forEach((price, idx, prices) => {
    const finalPrice = (price + (1 + tax)).toFixed(2)
    const priceObject = {index : idx, normalPrice: price, taxPrice: parseFloat(finalPrice)}
    pricesWithTax.push(priceObject)
})

const taxAdjustedPrices = prices.map((price, idx, prices) => {
    return {index: idx, taxAdjustedPrices: price * (1 + tax)}
})

console.log(prices)
console.log(pricesWithTax)
console.log(taxAdjustedPrices)

// Transforming data with Map() sorting & reversing

const unsortedData = data.slice()
const sortedData = data.sort((a, b) => {
    if (a > b) {
        return 1
    } else if (a === b) {
        return 0
    } else {
        return -1
    }
})
console.log('Normal data : ' , unsortedData)
//console.log('Sorted data : ' , sortedData.reverse())
console.log('Sorted data : ' , sortedData)

// Filtering Arrays with filter()

const filteredArray = data.filter((person, index, data) => {
    return person.name.startsWith('M')
})



console.log('filtered Array : ', filteredArray)

// Where Arrow functions shine !!

// const filteredArray = data.filter(person => person.name.startsWith('M'))


// The important reduce() method
let sum = 0

prices.forEach((price) => { sum += price})
console.log('total is : ' , sum)

const total = prices.reduce((prevValue, currValue, curIndex, prices) => {
   return prevValue + currValue
},0)
console.log('total is : ' , total)

// split() & join()

const address = 'ain azel;setif;19002'
const transformedAddress = address.split(';')
console.log('Transformed address is : ', transformedAddress)
//transformedAddress[2] = +transformedAddress[2]
//console.log('Transformed address is : ', transformedAddress)

const nameFragments = ['Max', 'Schwarz']
const fullName = nameFragments.join(' ')
console.log('Full name is : ', fullName)


// The Spread Operator

const copiedNameFragmentsOne = [...nameFragments]
copiedNameFragmentsOne.splice(0, 0, 'Mr')
//const copiedNameFragmentsTwo = [nameFragments]
console.log('Name Fragments : ', nameFragments)
console.log('Copied Name Fragments : ', copiedNameFragmentsOne)
//console.log('Copied Name Fragments : ', copiedNameFragmentsTwo)
console.log('Prices are : ', ...prices)
console.log('Minimal price in prices is : ', Math.min(...prices))

const persons = [
    {
        name: 'Max',
        age: 30
    },
    {
        name: 'Manual',
        age: 35
    }
]
const copiedPersons = [...persons.map(person => ({
    name: person.name,
    age: person.age,
    hobbies: []
}))]
persons.push({
    name: 'Anna',
    age: 29
})
persons[0].age = 40
console.log('Persons are : ', persons)
console.log('Copied Persons are : ', copiedPersons)

// Understand array Destruction

const [max, man] = persons
console.log(max.name, max.age, man.name,man.age)

const nameData = ['Max', 'Schwarz', 'Mr', 30]
const [firstName, lastName, ...otherInformation] = nameData
console.log(firstName, lastName, otherInformation)

/*
*
* Maps & Sets
*
* */
const idsArray = ['Alex', 'John', 'Max']
const ids = new Set(idsArray)
console.log('Does IDs Set contains 1 ?', ids.has(1))

ids.add('Max') // do not support duplication
idsArray.push('Max') // support duplication
console.log('IDs Set : ', ids)
console.log('IDs Array : ', idsArray)

// Looping throw a Set

console.log('Looping throw a Set : ')
for(const entry of ids.entries()) {
    console.log(entry[0])
}

// Deleting from a Set

ids.delete('Max')
console.log('IDs Set : ', ids)

/*
*
* Working with Maps
*
* */

const personOne = { name : 'Alex'}
const personTwo = { name : 'John'}

const personDATA = new Map([[personOne, [{ date: Date.now(), price: 10.15}]]])
personDATA.set(personTwo, [{ date: Date.now(), price: 12.50}])

console.log(personDATA)
console.log(personDATA.get(personOne))

// Looping throw a map
console.log('Looping throw a Map (Entries) : ')
console.log('Looping throw a Map : ')
for (const [key, value] of personDATA.entries()) {
    console.log(key , value)
}

console.log('Looping throw a Map (Values) : ')
for (const value of personDATA.values()) {
    console.log(value)
}

console.log('Looping throw a Map (Keys) : ')
for (const key of personDATA.keys()) {
    console.log(key)
}
const value
