// const Contenedor = require('./Contenedor')

const usuariosController = (req, res) => {
  return res.send('URL de usuarios')
}

const productosController = (req, res) => {
  return res.send('URL de productos')
}

module.exports = {
  usuariosController,
  productosController
}