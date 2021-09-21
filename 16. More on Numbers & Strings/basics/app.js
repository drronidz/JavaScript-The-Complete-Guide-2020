// Generate Random Number Between Min & Max

function randomIntBetween(min , max) {
    // min: 5, max: 10
    // Math.random() give us a Random Number between 0 & 1
    return Math.floor(Math.random() * (max - min) + min) // 10.99999999999 => 10
}

console.log(randomIntBetween(1,10))


// Exploring String methods
// Tagged Templates

function productDescription(strings, productName, productPrice) {
    console.log(strings)
    console.log(productName)
    console.log(productPrice)
    let priceCategory = 'cheap'
    if (productPrice > 20) {
        priceCategory = 'fair'
    }
    return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`
}

const productName = 'JavaScript Course'
const productPrice = 29.99

const productOutput = productDescription`This product (${productName}) is ${productPrice}.`
console.log(productOutput)