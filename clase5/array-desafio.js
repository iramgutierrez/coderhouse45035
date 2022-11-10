const productos = [
  { id:1, nombre:'Escuadra', precio:323.45 },
  { id:2, nombre:'Calculadora', precio:234.56 },
  { id:3, nombre:'Globo Terráqueo', precio:45.67 },
  { id:4, nombre:'Paleta Pintura', precio:456.78 },
  { id:5, nombre:'Reloj', precio:67.89 },
  { id:6, nombre:'Agenda', precio:78.90 }
]

// Escuadra, Calculadora, Globo Terráqueo

const productosNombres = productos
  .map(producto => producto.nombre)
  .join(', ')
  /*.reduce((result, product, index) => {
    return `${result}, ${product}`
  }, '')*/

const precioTotal = productos.reduce((total, producto) => {
  return total + producto.precio
}, 0)

const precioPromedio = (precioTotal / productos.length).toFixed(2)

const precios = productos.map(producto => producto.precio) // [ 323.45, 234.56, 45.67, 456.78, 67.89, 78.9 ]

const menorPrecio = Math.min(...precios) // 323.45, 234.56, 45.67, 456.78, 67.89, 78.9

const mayorPrecio = Math.max(...precios)

const respuesta = {
  productosNombres,
  precioTotal,
  precioPromedio,
  precios,
  menorPrecio,
  mayorPrecio
}

console.log(respuesta)