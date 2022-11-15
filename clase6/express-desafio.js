const express = require('express')
const moment = require('moment')

const app = express()

app.get('/', (req, res) => {
  return res.send('<h1 style="color: blue;">Bienvenidos al servidor express</h1>')
})

let visitas = 0

app.get('/visitas', (req, res) => {
  return res.send(`La cantidad de visitas es ${++visitas}`)
})

app.get('/fyh', (req, res) => {
  const fyh = moment().format('DD/MM/YYYY HH:mm:ss')

  const response = { fyh }

  return res.json(response)
})

const PORT = 8080

const server = app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))

server.on('error', err => console.log(`Error en servidor: ${err}`))