const button = document.querySelector('button')

const buttonClickHandler = event => {
    //event.target.disabled = true
    console.log(event)
}

const anotherButtonClickHandler = () => {
    alert('This was clicked again!')
}

// button.onclick = buttonClickHandler
// button.onclick = anotherButtonClickHandler

const boundFunction = buttonClickHandler.bind(this)

// button.addEventListener('click', buttonClickHandler)


// setTimeout(() => {
//     button.removeEventListener('click', buttonClickHandler)
// }, 2000)

// buttons.forEach(button => {
//     button.addEventListener('mouseenter', buttonClickHandler)
// })
//
// window.addEventListener('scroll', event => {
//     console.log(event)
// })

const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()
    console.log(event)
})

const div = document.querySelector('div')

div.addEventListener('click', event => {
    console.log('CLICKED DIV')
    console.log(event)
})

div.addEventListener('mouseenter', event => {
    console.log('ENTERED DIV')
    console.log(event)
})

button.addEventListener('click', function (event) {
    event.stopPropagation()
    //event.stopImmediatePropagation() // If we have multiple event listeners!
    console.log('CLICKED BUTTON')
    console.log(event)
    console.log(this)
})

button.addEventListener('mouseenter', event => {
    event.stopPropagation()
    //event.stopImmediatePropagation() // If we have multiple event listeners!
    console.log('ENTERED BUTTON')
    console.log(event)
})

const listItems  = document.querySelectorAll('li')
const list = document.querySelector('ul')

// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight')
//     })
// })

list.addEventListener('click', event => {
    //console.log(event.currentTarget)
    //event.target.classList.toggle('highlight')
    event.target.closest('li').classList.toggle('highlight')
})
