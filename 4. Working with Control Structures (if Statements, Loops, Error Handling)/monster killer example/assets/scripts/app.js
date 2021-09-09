const NORMAL_ATTACK_VALUE = 10
const STRONG_ATTACK_VALUE = 17
const MONSTER_ATTACK_VALUE = 14

let chosenMaxLife = 100
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife

adjustHealthBars(chosenMaxLife)

function attackMonster(mode) {
    let maxDamage;
    if(mode === 'NORMAL_ATTACK') {
        maxDamage = NORMAL_ATTACK_VALUE
    } else if (mode === 'STRONG_ATTACK') {
        maxDamage = MONSTER_ATTACK_VALUE
    }

    const monsterDamage = dealMonsterDamage(maxDamage)
    currentMonsterHealth -= monsterDamage

    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentPlayerHealth -= playerDamage

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You win!')
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0){
        alert('You lost!')
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!')
    }
}

function attackHandler() {
    attackMonster('NORMAL_ATTACK')
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK')
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click', strongAttackHandler)