//const ejecutar = unaFuncion => unaFuncion()
//const saludar = () => console.log('Saludos')

const ejecutar = unaFuncion => {
  try {
    return unaFuncion()
  } catch (e) {
    console.error(`Error controlado: ${e.message}`)
  }
}

const saludar = () => {
  throw new Error('Error X')
  //return console.log('Saludos')
}

ejecutar(saludar)
saludar()


console.log('programa sigue')