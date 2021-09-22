const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('post-template')
const form = document.querySelector('#new-post form')
const fetchButton = document.querySelector('#available-posts button')
const postList = document.querySelector('ul')


function sendHTTPRequest(method, url, data) {
    return new Promise((resolve, reject) => {
        const xmlHttpRequest = new XMLHttpRequest()
        xmlHttpRequest.open(method, url)
        xmlHttpRequest.responseType = 'json'

        xmlHttpRequest.onload = function () {
            if(xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 300) {
                resolve(xmlHttpRequest.response)
            } else {
                reject(new Error('Something went wrong!'))
            }
        }

        xmlHttpRequest.onerror = function () {
            reject(new Error('Failed to send request!'))
        }
        xmlHttpRequest.send(JSON.stringify(data))

    })
}

async function fetchPosts() {
    try {
        const listOfPosts = await sendHTTPRequest('GET', 'https://jsonplaceholder.typicode.com/poss')
        for (const post of listOfPosts) {
            const postElement = document.importNode(postTemplate.content, true)
            postElement.querySelector('h2').textContent = post.title.toUpperCase()
            postElement.querySelector('p').textContent = post.body
            postElement.querySelector('li').id = post.id
            listElement.append(postElement)
        }
    } catch (error) {
        alert(error.message)
    }

}

// Sending a GET Request ...
async function createPost(title, content) {
    const userId = Math.random()
    const post = {
        title: title,
        body: content,
        userId: userId
    }

    sendHTTPRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post)
}

// Trigger a request via User Interface!
fetchButton.addEventListener('click',  fetchPosts)

form.addEventListener('submit', event => {
    event.preventDefault()
    const enteredTitle = event.currentTarget.querySelector('#title').value
    const enteredContent = event.currentTarget.querySelector('#content').value

    createPost(enteredTitle, enteredContent)
})

postList.addEventListener('click', event => {
    if(event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id
        sendHTTPRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`)
    }
})










