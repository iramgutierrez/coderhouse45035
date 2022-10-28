const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject('No se puede dividir por cero')
    } else {
      resolve(dividendo / divisor)
    }
  })
}

dividir(10, 2)
  .then((resultado) => {
    console.log(`Resultado: ${resultado}`)

    return dividir(8, 4)
  })
  .then(resultado => {
    console.log(`Resultado: ${resultado}`)
    return dividir(3, 4)
  })
  .then(resultado => {
    console.log(`Resultado: ${resultado}`)
    return dividir(3, 1)
  })
  .then(resultado => {
    console.log(`Resultado: ${resultado}`)
    return dividir(2, 6)
  })
  .then(resultado => {
    console.log(`Resultado: ${resultado}`)
    return dividir(9, 3)
  })
  .catch((err) => {
    console.error(`Error: ${err}`)
  })


Promise.resolve(30)
  .then(result => console.log(result))

Promise.reject('Error')
  .catch(err => console.error(err))
