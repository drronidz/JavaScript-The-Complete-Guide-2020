const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (options) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(success => {
      resolve(success)
    }, error => {

    }, options)
  })
  return promise
}

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!')
    }, duration)
  })
  return promise
}

function trackUserHandler() {
  let positionDATA
  getPosition()
      .then(posDATA => {
        positionDATA = posDATA
        return setTimer(2000)
  })
      .then(data => {
        console.log(data, positionDATA)
      })
  setTimer(1000).then(() => {
    console.log('Timer done!')
  })
  console.log('Getting position')
}

button.addEventListener('click', trackUserHandler);

// let result = 0
//
// for (let i = 0; i < 10000000; i++) {
//   result += i
// }
//
// console.log(result)