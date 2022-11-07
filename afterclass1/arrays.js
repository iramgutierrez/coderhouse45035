const products = [
  {
    id: 1,
    title: 'Coca Cola',
    price: 10.00,
    thumbnail: 'cocacola.png'
  }
]

console.log(products)

// length

console.log(products.length)

// push

const productoNuevo = {
  // id: products.length + 1,
  title: 'producto2',
  price: 10.00,
  thumbnail: 'producto2.png'
}

productoNuevo.id = products.length + 1

console.log(productoNuevo)

products.push(productoNuevo)

console.log(products)

const productsString = `[
  { "id": 1, "title": "Coca Cola", "price": 10, "thumbnail": "cocacola.png" },
  { "title": "producto2", "price": 10, "thumbnail": "producto2.png", "id": 2 },
  { "title": "producto3", "price": 10, "thumbnail": "producto3.png", "id": 3 }
]`

console.log(productsString)

const productsObj = JSON.parse(productsString)

console.log(productsObj)

// find

const id = 2

const productById = productsObj.find((product) => {
  console.log(`Verificamos si ${product.id} es igual a ${id}`)
  const isProduct = product.id === id
  return isProduct
})

console.log(productById)
console.log(productsObj)

const newProducts = []

// findIndex

const indexById = productsObj.findIndex((product) => {
  console.log(`Verificamos si ${product.id} es igual a ${id}`)
  const isProduct = product.id === id
  return isProduct
})

console.log(indexById)

// splice

productsObj.splice(indexById, 1)

console.log(productsObj)
