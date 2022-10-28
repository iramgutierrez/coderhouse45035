function crearGritarNombre (nombre) {
  const signosDeExclamacion = '!!!!'
  return function () {
    return `Hola ${nombre}${signosDeExclamacion}`
    //return nombre + signosDeExclamacion
  }
}

const gritarCoderHouse = crearGritarNombre('coderhouse')
const gritarIram = crearGritarNombre('Iram')

console.log(gritarCoderHouse())
console.log(gritarIram())

// coderhouse --> coderhouse!!!!
// Iram ----> Iram!!!!
