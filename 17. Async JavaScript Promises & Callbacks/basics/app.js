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

async function trackUserHandler() {
  //let positionDATA
  let posDATA
  let timerData
  try {
    posDATA = await getPosition()
    timerData = await setTimer(2000)
  } catch (error) {
    console.log(error)
  }

  console.log(timerData, posDATA)

  //     .then(posDATA => {
  //       positionDATA = posDATA
  //       return setTimer(2000)
  // })
  //     .catch(error => { // then blocks after catch will be executed!
  //       console.log(error)
  //     })

      // .then(data => {
      //   console.log(data, positionDATA)
      // })

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