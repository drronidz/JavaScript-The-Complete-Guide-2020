const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('post-template')
const form = document.querySelector('#new-post form')
const fetchButton = document.querySelector('#available-posts button')
const postList = document.querySelector('ul')


function sendHTTPRequestOLD(method, url, data) {
    // The old way of sending HTTP Request via xmlHttpRequest
    return new Promise((resolve, reject) => {
        const xmlHttpRequest = new XMLHttpRequest()
        xmlHttpRequest.setRequestHeader('Content-Type', 'application/json')
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

function sendHTTPRequestMODERN(method, url, data) {
    // The modern way of sending HTTP Request via fetch API (Application Programming Interface)
    return fetch(url, {
        method : method,
        body: data,
        // body: JSON.stringify(data),
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    })
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            } else {
                response.json().then(errorDATA => {
                    console.log(errorDATA)
                    throw new Error('Something went wrong - server side !')
                })
            }
    })
        .catch(error => {
            console.log(error)
            throw new Error('Something went wrong!')
        })
}

async function fetchPosts() {
    try {
        const listOfPosts = await sendHTTPRequestMODERN('GET', 'https://jsonplaceholder.typicode.com/posts')
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

    const formDATA = new FormData(form)
    // formDATA.append('title', title)
    // formDATA.append('body', content)
    formDATA.append('userId', userId)

    sendHTTPRequestMODERN('POST', 'https://jsonplaceholder.typicode.com/posts', formDATA)
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
        sendHTTPRequestOLD('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`)
    }
})










