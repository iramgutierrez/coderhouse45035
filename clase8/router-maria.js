const express = require('express')

const messagesRouter = require('./messagesRouter')
const personaRouter = require('./personaRouter-maria')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/mensajes', messagesRouter)
app.use('/persona', personaRouter)

const PORT = 8080

const server = app.listen(PORT, () => console.log(`Servidor HTTP est escuchando en el puerto ${PORT}`))

server.on('error', err => console.log(`Error en servidor: ${err}`))