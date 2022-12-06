const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
app.use(express.static('./public'))

app.get('/healthcheck', (req, res) => {
  return res.json({
    status: 'ok'
  })
})

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

io.on('connection', (socket) => {
  console.log('cliente conectado', socket.id)
  socket.emit('mi mensaje', `Bienvenido cliente ${socket.id}`)

  io.sockets.emit('nuevo cliente', `Se ha conectado un nuevo cliente: ${socket.id}`)

  socket.on('notificacion', data => {
    console.log(data, socket.id)
  })
})

const PORT = 8080

httpServer.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))