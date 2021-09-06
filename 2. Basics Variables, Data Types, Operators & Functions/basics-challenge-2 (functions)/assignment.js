const task3Element = document.getElementById('task-3');

function greet() {
   alert("Hi there!")
}

function greetUser(userName) {
    alert('Hi ' + userName)
}

function defineUser(userName, age, job) {
    return `My name is ${userName}, I'm ${age} old and I work as ${job}`
}

greetUser('Max')

task3Element.addEventListener('click', greet)

const combinedString = defineUser('Abdou', '28', 'Developer')
alert(combinedString)