var miprimervariable = 'Valor de mi primera variable' // string
var valorBoleano = true // boolean
var valorNumerico = 345 // number
var valorNulo = null // null
var valorNoDefinido // undefined

console.log(miprimervariable)
console.log(valorBoleano)
console.log(valorNumerico)
console.log(valorNulo)
console.log(valorNoDefinido)

var valorObjeto = {
  miprimervalor: 'Valor dentro del objeto',
  segundovalor: 12,
  tercervalor: false
}

var valorArreglo = [
  'primer valor', 
  'segundo valor', 
  3, 
  true
]

console.log(valorObjeto)

console.log(valorArreglo)

var suma = function (a, b) {
  var resultado = a + b
  return resultado
}

var primerresultado = suma(3, 6)

console.log(primerresultado)

var segundoresultado = suma(1,7)

console.log(segundoresultado)
