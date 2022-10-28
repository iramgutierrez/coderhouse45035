const escribirArchivo = require('./escrArch.js')

console.log('inicio del programa')

const callbackFn = () => {
  console.log('termino de escribir en el archivo')

  console.log('fin del programa')
}

escribirArchivo('hola mundo', callbackFn)

//escribirArchivo('hola mundo')
  //.then(callbackFn)

/*console.log('termino de escribir en el archivo')

console.log('fin del programa')*/

