const sayHello = name => console.log('Hi ' + name);

const sayHello2 = (name, phrase) => console.log(phrase + ' ' + name)
const sayHello3 = () => console.log('Hi Hard-coded!')
const sayHello4 = name => 'Hi ' + name
const sayHello5 = (name, phrase = 'Hi') => console.log(phrase + ' ' + name)

function checkInput(cb, ...strings) {
  let hasEmptyText = false
  for(const text of strings) {
    if(!text) {
      hasEmptyText = true
      break
    }
  }
  if(!hasEmptyText) {
    cb()
  } else {
    console.log('There is an empty')
  }
}

checkInput(() => {
  console.log('All not empty!')
}, 'Hello','12','adsfa','aaa')

sayHello('Max');
sayHello2('Max', 'is a good person')
sayHello3()
sayHello4('Max')
sayHello5('Merry')
sayHello5('DIABLO', 'Hello')