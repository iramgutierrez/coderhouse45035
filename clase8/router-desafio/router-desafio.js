const express = require('express')
const mascotasRouter = require('./mascotasRouter')
const personasRouter = require('./personasRouter')

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/mascotas', mascotasRouter)
app.use('/personas', personasRouter)

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor HTTP corriendo en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))