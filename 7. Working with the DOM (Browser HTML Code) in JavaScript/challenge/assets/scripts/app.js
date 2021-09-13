const addMovieModal = document.getElementById('add-modal')
// const addMovieModal = document.querySelector('#add-modal')
// const addMovieModal = document.body.children[1]
const startAddMovieButton = document.querySelector('header button')
// const startAddMovieButton = document.querySelector('header').lastElementChild
const backdrop = document.getElementById('backdrop')
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling
const userInputs = addMovieModal.querySelectorAll('input')
const entryTextSection = document.getElementById('entry-text')
const deleteMovieModal = document.getElementById('delete-modal')

const movies = []

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
}

const closeMovieAdditionModal = () => {
    addMovieModal.classList.remove('visible')
    toggleBackdrop()
    clearMovieInputHandler()
}

const openMovieAdditionModal = () => {
    addMovieModal.classList.add('visible')
    toggleBackdrop()
}

const clearMovieInputHandler = () => {
    for(const userInput of userInputs) {
        userInput.value = ''
    }
}

const backdropClickHandler = () => {
    closeMovieModal()
    closeMovieDeletionModal()
}

const cancelAddMovieHandler = () => {
    closeMovieAdditionModal()
    clearMovieInputHandler()
    toggleBackdrop()
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value
    const imageUrlValue = userInputs[1].value
    const ratingValue = userInputs[2].value

    if(titleValue.trim() === ''
        || imageUrlValue.trim() === ''
        || ratingValue.trim() === ''
        || parseInt(ratingValue) < 1
        || parseInt(ratingValue) > 5) {
        alert('Please enter valid values (rating between 1 and 5).')
    } else {
        const newMovie = {
            id : Math.random().toString(),
            title : titleValue,
            image : imageUrlValue,
            rating : ratingValue
        }
        movies.push(newMovie)

        console.log(newMovie)
        console.log(movies)

        toggleBackdrop()
        clearMovieInputHandler()
        updateMovieUI()
        renderNewMovieElementHandler(
            newMovie.id,
            newMovie.title,
            newMovie.image,
            newMovie.rating)
    }
    closeMovieAdditionModal()
}

const deleteMovie = movieID => {
    let movieIndex = 0
    for (const movie of movies) {
        if (movie.id === movieID) {
            break
        }
        movieIndex++
    }
    movies.splice(movieIndex, 1)
    const listRoot = document.getElementById('movie-list')
    listRoot.removeChild(listRoot.children[movieIndex])
    //listRoot.children[movieIndex].remove()
    closeMovieDeletionModal()
}

const closeMovieDeletionModal = () => {
    deleteMovieModal.classList.remove('visible')
    toggleBackdrop()
}

const deleteMovieHandler = (movieID) => {
    deleteMovieModal.classList.add('visible')
    toggleBackdrop()
    const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive')
    const confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger')
    cancelDeletionButton.addEventListener('click', closeMovieDeletionModal)
    confirmDeletionButton.addEventListener('click', deleteMovie.bind(null, movieID))
}

const updateMovieUI = () => {
    if(movies.length === 0) {
        entryTextSection.style.display = 'block'
    } else {
        entryTextSection.style.display = 'none'
    }
}

const renderNewMovieElementHandler = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li')
    newMovieElement.className = 'movie-element'
    newMovieElement.innerHTML = `
        <div class="movie-element__info">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 starts</p>
        </div>
    `
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null,id))
    const listRoot = document.getElementById('movie-list')
    listRoot.append(newMovieElement)
}

startAddMovieButton.addEventListener('click', openMovieAdditionModal)
backdrop.addEventListener('click', closeMovieAdditionModal)
cancelAddMovieButton.addEventListener('click',cancelAddMovieHandler)
confirmAddMovieButton.addEventListener('click',addMovieHandler)