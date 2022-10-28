class Persona {
  constructor (nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }

  static saludoCorto = 'Hola'

  saludo () {
    console.log(`Hola! Soy ${this.nombre} y tengo ${this.edad} años`)
  }

  static saludoEstatico () {
    console.log('Hola, como estas?')
  }
}

const iram = new Persona('Iram', 33)
const carlos = new Persona('Carlos', 34)

console.log(iram)
console.log(iram.nombre)
iram.saludo()

carlos.saludo()

console.log(Persona.saludoCorto)

Persona.saludoEstatico()