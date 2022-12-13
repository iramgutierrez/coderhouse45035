const express = require('express')
const cors = require('cors')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/public', express.static('./frontend'))

const users = []

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado')

  // socket.emit('users', users)
})

app.get('/users', (req, res) => {
  return res.json(users)
})

app.post('/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    username: req.body.username
  }

  users.push(user)

  io.sockets.emit('newUser', user)

  return res.render('products', {
    products: products.length > 0
  })

  return res.status(201).json(user)
})

const PORT = 8080

httpServer.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))