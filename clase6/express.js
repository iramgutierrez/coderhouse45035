const express = require('express')
const controllers = require('./controllers')

const app = express()

/* const usuariosController = (req, res) => {
  return res.send('URL de usuarios')
} */

app.get('/', (req, res) => {
  return res.send('Hola mundo')
})

app.get('/usuarios', controllers.usuariosController)

app.get('/productos', controllers.productosController)

app.get('/clientes', (req, res) => {
  return res.send('URL de clientes')
})

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`)
})

server.on('error', err => {
  console.log(`Error en servidor: ${err}`)
})
