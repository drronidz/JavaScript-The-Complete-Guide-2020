const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('post-template')

function sendHTTPRequest(method, url, data) {
    return new Promise((resolve, reject) => {
        const xmlHttpRequest = new XMLHttpRequest()
        xmlHttpRequest.open(method, url)
        xmlHttpRequest.responseType = 'json'

        xmlHttpRequest.onload = function () {
            resolve(xmlHttpRequest.response)
            // console.log(xmlHttpRequest.response)
            // const listOfPosts = xmlHttpRequest.response // We cannot use it like this because it's a json
            // const listOfPosts = JSON.parse(xmlHttpRequest.response)

        }
        xmlHttpRequest.send(JSON.stringify(data))

    })
}

async function fetchPosts() {
    const listOfPosts = await sendHTTPRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    for (const post of listOfPosts) {
        const postElement = document.importNode(postTemplate.content, true)
        postElement.querySelector('h2').textContent = post.title.toUpperCase()
        postElement.querySelector('p').textContent = post.body
        listElement.append(postElement)
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

fetchPosts()
createPost('DUMMY', 'A Dummy post!')









