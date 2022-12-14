class Contador {
  static globalCount = 0 
  constructor (name) {
    this.name = name
    this.count = 0
  }

  obtenerResponsable () {
    return this.name
  }

  obtenerCuentaIndividual () {
    return this.count
  }

  static obtenerCuentaGlobal () {
    return Contador.globalCount
  }

  contar () {
    this.count += 1
    Contador.globalCount += 1
  }
}

const contador1 = new Contador('Iram')
const contador2 = new Contador('Pablo')
const contador3 = new Contador('Adrian')

console.log(contador1.obtenerResponsable())
console.log(contador2.obtenerResponsable())
console.log(contador3.obtenerResponsable())

console.log(contador1.obtenerCuentaIndividual())
console.log(contador2.obtenerCuentaIndividual())
console.log(contador3.obtenerCuentaIndividual())

console.log(Contador.obtenerCuentaGlobal())

contador1.contar()
contador1.contar()
contador2.contar()
contador3.contar()
contador3.contar()
contador3.contar()
contador2.contar()
contador1.contar()
contador1.contar()
contador2.contar()
contador2.contar()
contador3.contar()
contador3.contar()
contador1.contar()
contador3.contar()

console.log(contador1.obtenerCuentaIndividual())
console.log(contador2.obtenerCuentaIndividual())
console.log(contador3.obtenerCuentaIndividual())

console.log(Contador.obtenerCuentaGlobal())

