const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (options) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        success => {
          resolve(success)
    },
            error => {
          reject(error)
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
function trackUserHandlerOne() {
  let positionDATA
  getPosition()
      .then(posDATA => {
        positionDATA = posDATA
        return setTimer(2000)
      })
      .catch(error => { // then blocks after catch will be executed!
        console.log(error)
      })

      .then(data => {
        console.log(data, positionDATA)
      })

  // the execution of this is before the try-catch block!
  setTimer(1000).then(() => {
    console.log('Timer done!')
  })
  console.log('Getting position')
}
async function trackUserHandlerTwo() {

  let posDATA
  let timerData
  try {
    posDATA = await getPosition()
    timerData = await setTimer(2000)
  } catch (error) {
    console.log(error)
  }

  console.log(timerData, posDATA)

  // the execution of this is after the try-catch block!
  setTimer(1000).then(() => {
    console.log('Timer done!')
  })
  console.log('Getting position')
}

button.addEventListener('click', trackUserHandlerOne);

Promise.race([
  getPosition(),
  setTimer(1000)
]).then(data => {
  console.log(data)
})

Promise.all([
  getPosition(),
  setTimer(1000)
]).then(data => {
  console.log(data)
})

Promise.allSettled([
  getPosition(),
  setTimer(1000)
]).then(data => {
  console.log(data)
})


// let result = 0
//
// for (let i = 0; i < 10000000; i++) {
//   result += i
// }
//
// console.log(result)