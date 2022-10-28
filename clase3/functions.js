/*function mostrar (params) {
  console.log(`Log: ${params}`)
}*/

/*const mostrar = function (params) {
  console.log(`Log: ${params}`)
}*/

/*const mostrar = (params) => {
  console.log(`Log: ${params}`)
}*/

/*const mostrar = params => {
  console.log(`Log: ${params}`) 
}*/

const mostrar = params => `Log: ${params}`

console.log(mostrar('Primer log'))
mostrar('segundo log')
mostrar('error')

const result = mostrar('resultado')

console.log(result)

const getPersona = () => {
  return { nombre: 'Iram', edad: 33 }
}

// const getPersona = () => ({ nombre: 'Iram', edad: 33 })


console.log(getPersona())