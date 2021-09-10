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
        return DEFAULT_USER_CHOICE
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

const getWinner = function (computerChoice, playerChoice) {
    if(computerChoice === playerChoice) {
        return RESULT_DRAW
    } else if (computerChoice === ROCK && playerChoice === SCISSORS) {
        return RESULT_COMPUTER_WINS
    } else if (computerChoice === SCISSORS && playerChoice === ROCK) {
        return RESULT_PLAYER_WINS
    } else if (computerChoice === SCISSORS && playerChoice === PAPER) {
        return RESULT_COMPUTER_WINS
    } else if (computerChoice === PAPER && playerChoice === SCISSORS) {
        return RESULT_PLAYER_WINS
    } else if (computerChoice === PAPER && playerChoice === ROCK) {
        return RESULT_COMPUTER_WINS
    } else if (computerChoice === ROCK && playerChoice === PAPER) {
        return RESULT_PLAYER_WINS
    }
}

startGameBtn.addEventListener('click', function () {
    if(gameIsRunning) {
        return
    }
    gameIsRunning = true
    console.log('Game is starting...')
    const playerChoice = getPlayerChoice()
    const computerChoice = getComputerChoice()
    const winner = getWinner(computerChoice, playerChoice)
    console.log(`Player choice is :${playerChoice}`)
    console.log(`Computer choice is :${computerChoice}`)
    console.log(`The winner is :${winner}`)
})
