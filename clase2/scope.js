/*function exampleFunction () {
  const x = 'declarada en el scope local'
  console.log(x)
}

console.log(x)*/

/*const x = 'declarda en el scope global'

function exampleFunction () {
  console.log(x)
}

exampleFunction()
console.log(x)*/

let a = -1

function scope () {
  let i = 0

  if (true) {
    let j = 1
    console.log(a, i, j)
  }

  console.log(a, i)
}

scope()

console.log(a)
