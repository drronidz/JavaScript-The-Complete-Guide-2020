const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('Game is starting...')
}

// const person = {
//     name: 'Max',
//     greet: function greet() {
//         console.log(`Hello there! ${this.name}`)
//     }
// }
//
// person.greet()

console.log(typeof startGame)
console.dir(startGame)

startGameBtn.addEventListener('click', startGame)
