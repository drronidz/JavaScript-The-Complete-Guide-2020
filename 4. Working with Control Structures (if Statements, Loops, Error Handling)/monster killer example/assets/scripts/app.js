const NORMAL_ATTACK = 'NORMAL_ATTACK' // NORMAL_ATTACK = 0
const NORMAL_ATTACK_VALUE = 10
const STRONG_ATTACK = 'STRONG_ATTACK' // STRONG_ATTACK = 1
const STRONG_ATTACK_VALUE = 17
const MONSTER_ATTACK_VALUE = 14
const HEAL_VALUE = 20

const LOG_EVENT_PLAYER_NORMAL_ATTACK = 'PLAYER_NORMAL_ATTACK'
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK'
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK'
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL'
const LOG_EVENT_GAME_OVER = 'GAME_OVER'

const enteredValue = prompt('Maximum life for you and the monster', '100')

let chosenMaxLife = parseInt(enteredValue)
let battleLog = []
let lastLoggedEntry = 0

if ( isNaN(chosenMaxLife) ||chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife
let hasBonusLife = true

adjustHealthBars(chosenMaxLife)

function writeToLog(event, value, monsterHealth, playerHealth) {
    let logEntry

    switch (event) {
        case LOG_EVENT_PLAYER_NORMAL_ATTACK :
            logEntry = {
                event : event,
                value : value,
                target: 'MONSTER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            }
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK :
            logEntry = {
                event: event,
                value: value,
                target: 'MONSTER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            }
            break
        case LOG_EVENT_MONSTER_ATTACK :
            logEntry = {
                event: event,
                value: value,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            }
            break
        case LOG_EVENT_PLAYER_HEAL :
            logEntry = {
                event: event,
                value: value,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            }
            break
        case LOG_EVENT_GAME_OVER :
            logEntry = {
                event: event,
                value: value,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            }
            break
        default :
            logEntry = {}
    }

    // if (event === LOG_EVENT_PLAYER_NORMAL_ATTACK) {
    //
    // } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    //
    // } else if (event === LOG_EVENT_MONSTER_ATTACK) {
    //
    // } else if (event === LOG_EVENT_PLAYER_HEAL) {
    //
    // } else if (event === LOG_EVENT_GAME_OVER) {
    //
    // }
    battleLog.push(logEntry)
}

function reset() {
    currentMonsterHealth = chosenMaxLife
    currentPlayerHealth = chosenMaxLife
    resetGame(chosenMaxLife)
}

function endRound() {
    const initialPlayerHealth = currentMonsterHealth
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentPlayerHealth -= playerDamage

    if(currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false
        removeBonusLife()
        currentPlayerHealth = initialPlayerHealth
        alert('You would be dead but the bonus life saved you!')
        setPlayerHealth(initialPlayerHealth)
    }

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You win!')
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'PLAYER WON',
            currentMonsterHealth,
            currentPlayerHealth
        )
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('You lost!')
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'MONSTER WON',
            currentMonsterHealth,
            currentPlayerHealth
        )
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!')
        writeToLog(
            LOG_EVENT_GAME_OVER,
            'A DRAW',
            currentMonsterHealth,
            currentPlayerHealth
        )
    }

    if(currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset()
    }
}

function attackMonster(mode) {
    let maxDamage =
        mode === NORMAL_ATTACK
            ? NORMAL_ATTACK_VALUE
            : STRONG_ATTACK_VALUE
    const logEvent =
        mode === NORMAL_ATTACK
            ? LOG_EVENT_PLAYER_NORMAL_ATTACK
            : LOG_EVENT_PLAYER_STRONG_ATTACK
    // if(mode === NORMAL_ATTACK) {
    //     maxDamage = NORMAL_ATTACK_VALUE
    //     logEvent = LOG_EVENT_PLAYER_NORMAL_ATTACK
    // } else if (mode === STRONG_ATTACK) {
    //     maxDamage = STRONG_ATTACK_VALUE
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK
    // }
    const damage = dealMonsterDamage(maxDamage)
    currentMonsterHealth -= damage

    writeToLog(
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth
    )

    endRound()
}

function attackHandler() {
    attackMonster(NORMAL_ATTACK)
    endRound()
}

function strongAttackHandler() {
    attackMonster(STRONG_ATTACK)
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >=chosenMaxLife- HEAL_VALUE) {
        alert("You can't heal to more than your max initial health.")
        healValue = chosenMaxLife - currentPlayerHealth
    } else {
        healValue  = HEAL_VALUE
    }
    increasePlayerHealth(healValue)
    currentMonsterHealth += healValue
    writeToLog(
        LOG_EVENT_PLAYER_HEAL,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
    )
    endRound()
}

function printLogHandler() {
    // for(let i = 0; i < battleLog.length; i++) {
    //     console.log(`---------- ${i} ----------`)
    //     console.log(battleLog[i])
    //     console.log(`---------- ${i} ----------`)
    // }

    // for (let i = 10; i > 0; i--) {
    //     i--;
    //     console.log(i)
    // }

    // for(const logEntry of battleLog) {
    //     console.log(logEntry)
    // }

    // let j = 0;
    // while (j < 3) {
    //     console.log('-------------')
    //     j++
    // }

    let k = 0
    do {
        console.log(k)
        k++
    } while (k <= 3)

    let i = 0
    for (const logEntry of battleLog) {
        if (!lastLoggedEntry || lastLoggedEntry === i) {
            console.log(`# ${i} `)
            for (const  key in logEntry) {
                console.log(` ${key} : ${logEntry[key]}`)
            }
            lastLoggedEntry = i
        }
        i++
        break
    }
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)
healBtn.addEventListener('click', healPlayerHandler)
logBtn.addEventListener('click', printLogHandler)