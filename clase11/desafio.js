const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
app.use(express.static('./desafio'))

app.get('/healthcheck', (req, res) => {
  return res.json({
    status: 'ok'
  })
})

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const mensajes = []

io.on('connection', (socket) => {
  console.log('¡Nuevo cliente conectado!', socket.id)

  socket.emit('mensajes', mensajes)

  socket.on('mensaje', (data) => {
    const mensaje = {
      socketId: socket.id,
      mensaje: data
    }

    mensajes.push(mensaje)

    io.sockets.emit('nuevoMensaje', mensaje)
  })
})

setTimeout(() => {
  console.log('mensaje automatico')
  io.sockets.emit('mensajeAutomatico', 'mensaje automatico del servidor')
}, 5000)

const PORT = 8080

httpServer.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))