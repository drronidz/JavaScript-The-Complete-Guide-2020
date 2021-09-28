const storeButton = document.getElementById('store-btn')
const retrieveButton = document.getElementById('retrieve-btn')

const dbRequest = indexedDB.open('StorageDummy', 1)
let db

dbRequest.onsuccess = function(event) {
    db = event.target.result
}

dbRequest.onupgradeneeded = function (event) {
    db = event.target.result
    const objectStore = db.createObjectStore('products', {keyPath: 'id'})

    objectStore.transaction.oncomplete = function (event) {
        const productStore = db.transaction('products', 'readwrite').objectStore('products')
        productStore.add({
            id: 'p1',
            title: 'A First Product',
            price: 12.99,
            tags: ['Expensive', 'Luxury']
        })
    }
}

dbRequest.onerror = function () {

}

storeButton.addEventListener('click', () => {
    if(db) {
        const productStore = db
            .transaction('products', 'readwrite')
            .objectStore('products')
        productStore.add({
            id: 'p2',
            title: 'A Second Product',
            price: 13.99,
            tags: ['Expensive', 'Luxury']
        })
    }
})

retrieveButton.addEventListener('click', () => {
    const productStore = db
        .transaction('products', 'readwrite')
        .objectStore('products')

    const request = productStore.get('p2')

    request.onsuccess = function () {
        console.log(request.result)
    }
})
