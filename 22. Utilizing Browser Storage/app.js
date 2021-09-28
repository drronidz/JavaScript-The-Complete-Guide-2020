const storeButton = document.getElementById('store-btn')
const retrieveButton = document.getElementById('retrieve-btn')

storeButton.addEventListener('click', () => {
    const userID = 'u123'
    document.cookie = `userID ${userID}`
})

retrieveButton.addEventListener('click', () => {
    console.log(document.cookie)
})