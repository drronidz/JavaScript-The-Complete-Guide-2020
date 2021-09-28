const storeButton = document.getElementById('store-btn')
const retrieveButton = document.getElementById('retrieve-btn')

storeButton.addEventListener('click', () => {
    const userID = 'u123'
    const user = {
        name: 'Max',
        age: 30
    }
    document.cookie = `userID ${userID}`
    document.cookie = `user= ${JSON.stringify(user)}; max-age=2`
    //document.cookie = `user= ${JSON.stringify(user)}; expires=360`
})

retrieveButton.addEventListener('click', () => {
    const cookieDATA = document.cookie.split(';')
    const data = cookieDATA.map(i => {
        return i.trim()
    })
    console.log(data)
    console.log(data[1])
    console.log(`user value: ${data[1].split('=')[1]}`) // User Value ...
})