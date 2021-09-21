// Generate Random Number Between Min & Max

function randomIntBetween(min , max) {
    // min: 5, max: 10
    // Math.random() give us a Random Number between 0 & 1
    return Math.floor(Math.random() * (max - min) + min) // 10.99999999999 => 10
}

console.log(randomIntBetween(1,10))