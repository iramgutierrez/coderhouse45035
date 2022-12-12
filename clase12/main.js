const { Console } = require('console')
const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('./public'))

let users = []
const messages = []

app.get('/login', (req, res) => {
  return res.render('login')
})

app.post('/login', (req, res) => {
  const { username } = req.body

  // users.push(username)

  return res.redirect(`/chat?username=${username}`)
})

app.get('/chat', (req, res) => {
  return res.render('chat')
})


const PORT = 8080

httpServer.listen(PORT, () => console.log(`Servidor HTTP corriendo en el puerto ${PORT}`))

io.on('connection', socket => {
  console.log('Nuevo cliente conectado')

  socket.on('joinChat', ({ username }) => {
    // const username = data.username

    users.push({
      id: socket.id,
      username,
      avatarId: Math.ceil(Math.random() * 7)
    })

    socket.emit('notification', `Bienvenido ${username}`)
    socket.broadcast.emit('notification', `${username} se ha unido al chat`)
    io.sockets.emit('users', users)
  })

  socket.on('messageInput', data => {
    const now = new Date()
    const user = users.find(user => user.id === socket.id)

    const message = {
      text: data,
      time: `${now.getHours()}:${now.getMinutes()}`,
      user
    }

    messages.push(message)

    socket.emit('myMessage', message)
    socket.broadcast.emit('message', message)
  })

  socket.on('disconnect', reason => {
    const user = users.find(user => user.id === socket.id)
    
    if (user) {
      users = users.filter(user => user.id !== socket.id)
      socket.broadcast.emit('notification', `${user.username} se ha ido del chat`)
      io.sockets.emit('users', users)
    }

  })
})