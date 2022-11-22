const express = require('express')

const app = express()

console.log(__dirname + '/public')

app.use('/estaticos', express.static(__dirname + '/public'))

const PORT = 8080

const server = app.listen(PORT, () => console.log(`Servidor HTTP escuchando en el puerto ${PORT}`))

server.on('error', err => console.log(`Error de servidor: ${err}`))