const storeButton = document.getElementById('store-btn')
const retrieveButton = document.getElementById('retrieve-btn')

const userID = 'u123'
const user = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports','Cooking']
}

storeButton.addEventListener('click', () => {
    sessionStorage.setItem('userID', userID)
    localStorage.setItem('user', JSON.stringify(user))
})

retrieveButton.addEventListener('click', () => {
    const extractedID = sessionStorage.getItem('userID')
    const extractedUser = localStorage.getItem('user')
    console.log(extractedUser)
    if(extractedID) {
        console.log('Got the id :' + extractedID)
    } else {
        console.log('Could not find ID.')
    }
})

