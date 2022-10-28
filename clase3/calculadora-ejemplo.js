const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => a / b
const modulo = (a, b) => a % b

const operacion = (a, b, accion, callback) => {
  //return accion(a, b)

  setTimeout(() => {
    const resultado = accion(a, b)
    callback(null, resultado)
  }, 500)
}

const callbackFn = (err, resultado) => {
  if (err) {
    console.error('Error')
  } else {
    console.log(`Resultado: ${resultado}`)
  }
}

operacion(3, 4, multiplicacion, (err, resultado) => {
  if (err) {
    console.error('Error')
  } else {
    console.log(`Resultado: ${resultado}`)
    operacion(3, 4, suma, (err, resultado) => {
      if (err) {
        console.error('Error')
      } else {
        console.log(`Resultado: ${resultado}`)
        operacion(3, 4, resta, (err, resultado) => {
          if (err) {
            console.error('Error')
          } else {
            console.log(`Resultado: ${resultado}`)
          }
        })
      }
    })
  }
})