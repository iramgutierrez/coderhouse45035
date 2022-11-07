class Contendor {
  constructor (filename) {
    this.filename = filename
    console.log(`Vamos a estar trabajando con el archivo ${this.filename}`)
  }

  save (obj) {
    const objString = JSON.stringify(obj, null, 2)
    console.log(`Deberiamos asignarle un id al objeto y mandar a guardar ${objString} dentro de nuestro archivo ${this.filename}`)
  }

  getById (id) {
    console.log(`Deberiamos devolver el producto con el id asignado ${id}`)
  }
}

const productosContenedor = new Contendor('productos.txt')

const producto = {
  title: 'Coca Cola',
  price: 10.00,
  thumbnail: 'cocacola.png'
}

productosContenedor.save(producto)
productosContenedor.getById(1)
