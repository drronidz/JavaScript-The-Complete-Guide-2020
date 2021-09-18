// const person = {
//     name: 'Max',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     greet: function () {
//         alert('Hi there!')
//     }
// }
//
// /* ...
// Adding and Modifying & Deleting Object properties
// */
//
// person.greet()
// console.log()
//
// // Adding
// console.log('Adding properties to object: ')
// console.log(person.isAdmin)
// person.isAdmin = true
// console.log(person)
// console.log(person.isAdmin)
//
// // Modifying
// console.log('Age before modification :',person.age)
// person.age = 40
// console.log('Age after modification :',person.age)
//
// // Deleting
// delete person.age
// console.log(person)
//
// /*
// *
// * Special Key Names & Square brackets Property Access
// * */
//
// let personAA = {
//     'first name' : 'Max'
// }
// console.log(personAA)
// console.log(personAA["first name"])
//
// const movieList = document.getElementById('movie-list')
// movieList.style['background-color'] = 'red'
// movieList.style.display = 'block'
//
// /*
// * Property types & Property Order
// * */
//
// const personBB = {
//     'first name': 'Max',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     1.5: 'Hi',
//     greet: function () {
//         alert('Hi there!')
//     }
// }
//
// console.log(personBB["1.5"])
//
//
// /*
// *
// * Dynamic Property Access & Setting Properties Dynamically
// *
// * */
// const keyName = 'first name'
// const personCC = {
//     [keyName]: 'Max',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     1.5: 'Hi',
//     greet: function () {
//         alert('Hi there!')
//     }
// }
//
// console.log(personCC[keyName])

const movies = []
const addMovieBtn = document.getElementById('add-movie-btn')
const searchBtn = document.getElementById('search-btn')

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list')

    if (movies.length === 0) {
        movieList.classList.remove('visible')
        return
    } else {
        movieList.classList.add('visible')
    }

    movieList.innerHTML = ''

    const filteredMovies = !filter ? movies : movies.filter(movie => {
        return movie.info.title.includes(filter)
    })

    filteredMovies.forEach((movie) => {
        const movieNode = document.createElement('li')
        const { info, ...otherProperties } = movie
        console.log('Other properties: ', otherProperties)
        const { title : movieTitle} = info
        let text = movie.getFormattedTitle() + ' - '
        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key}: ${info[key]}`
            }
        }
        movieNode.textContent = text
        movieList.append(movieNode)
    })
}

const addMovieHandler = () => {
    const title = document.getElementById('title').value
    const extraName = document.getElementById('extra-name').value
    const extraValue = document.getElementById('extra-value').value

    if (
        title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {

    }

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.random().toString(),
        getFormattedTitle: function () {
            return this.info.title.toUpperCase()
        }
    }

    movies.push(newMovie)
    // console.log(newMovie)
    renderMovies()
}
const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value
    renderMovies(filterTerm)
}


addMovieBtn.addEventListener('click', addMovieHandler)
searchBtn.addEventListener('click', searchMovieHandler)