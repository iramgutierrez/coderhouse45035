/*function suma (a, b) {
  return a + b
}

console.log(suma(1,2))
console.log(suma(9,7))*/

const suma = function (a, b) {
  return a +b
}

console.log(suma(1,2))
console.log(suma(9,7))

/*const multiplicar = function (a, b) {
  return a * b
}

console.log(multiplicar(2, 6))
console.log(multiplicar(2, 5))
console.log(multiplicar(2, 1))
console.log(multiplicar(2, 2))*/

const multiplicar = function (a) {
  return function (b) {
    return a * b
  }
}

const duplicar = multiplicar(2)
const triplicar = multiplicar(3)

console.log(duplicar(6))
console.log(duplicar(5))
console.log(duplicar(1))
console.log(duplicar(2))

;(function () {
  const a = 'a'
  console.log('inicializando')
  console.log(a)
  const setttings = {}
})()

/*(function () {
  const setttings = {}
})()*/