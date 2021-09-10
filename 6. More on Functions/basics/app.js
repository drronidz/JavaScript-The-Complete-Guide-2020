const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = ROCK
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WINS = 'PLAYER WINS'
const RESULT_COMPUTER_WINS = 'COMPUTER WINS'

let gameIsRunning = false

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase()
    if(
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`)
        return;
    }
    return selection
}

const getComputerChoice = function() {
    const randomValue = Math.random()
    if(randomValue < 0.34) {
        return ROCK
    } else if (randomValue < 0.67) {
        return PAPER
    } else {
        return SCISSORS
    }
}

// Arrow Function
// const getWinner = (computerChoice, playerChoice) => {
//     if(computerChoice === playerChoice) {
//         return RESULT_DRAW
//     } else if (computerChoice === ROCK && playerChoice === SCISSORS) {
//         return RESULT_COMPUTER_WINS
//     } else if (computerChoice === SCISSORS && playerChoice === ROCK) {
//         return RESULT_PLAYER_WINS
//     } else if (computerChoice === SCISSORS && playerChoice === PAPER) {
//         return RESULT_COMPUTER_WINS
//     } else if (computerChoice === PAPER && playerChoice === SCISSORS) {
//         return RESULT_PLAYER_WINS
//     } else if (computerChoice === PAPER && playerChoice === ROCK) {
//         return RESULT_COMPUTER_WINS
//     } else if (computerChoice === ROCK && playerChoice === PAPER) {
//         return RESULT_PLAYER_WINS
//     }
// }

const getWinner = (computerChoice, playerChoice = DEFAULT_USER_CHOICE) => {
    return computerChoice === playerChoice
        ? RESULT_DRAW
        : (computerChoice === ROCK && playerChoice === PAPER) ||
        (computerChoice === PAPER && playerChoice === SCISSORS) ||
        (computerChoice === SCISSORS && playerChoice === ROCK)
        ? RESULT_PLAYER_WINS
        : RESULT_COMPUTER_WINS
}

startGameBtn.addEventListener('click', () => {
    if(gameIsRunning) {
        return
    }
    gameIsRunning = true
    console.log('Game is starting...')
    const playerChoice = getPlayerChoice() // might be undefined
    const computerChoice = getComputerChoice()
    let winner
    if (playerChoice) {
        winner = getWinner(computerChoice,playerChoice)
    } else {
        winner = getWinner(computerChoice)
    }

    let  message =
        `You picked ${playerChoice ? playerChoice : DEFAULT_USER_CHOICE}, 
        computer picked ${computerChoice}, 
        therefore you `
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw.'
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.'
    } else {
        message = message + 'lost.'
    }
    alert(message)
    gameIsRunning = false
})

// not related to game

const sumUp = (a, b, ...numbers) => {
    let sum = 0
    for (const num of numbers) {
        sum += num;

    }
    return sum
}

const subtractUp = function () {
    let sum = 0
    for (const num of arguments) { // don't use that
        sum -= num
    }
    return sum
}

console.log(sumUp(1, 5, 10, -3, 6, 10))
console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 11))
console.log(subtractUp(1, 10, 15, 20))