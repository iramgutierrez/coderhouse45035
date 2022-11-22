const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const messages = [
  {
    id: 1,
    message: "hola",
    user: "iram"
  },
  {
    id: 2,
    message: "que tal?",
    user: "iram"
  },
  {
    id: 3,
    message: "como estas?",
    user: "carlos"
  },
]

app.get('/', (req, res) => {
  console.log('request')
  return res.send('Hola mundo!')
})

app.get('/api/mensajes', (req, res) => {
  // const query = req.query
  const { query } = req

  if (query.user) {
    const filteredMessages = messages.filter(message => message.user === query.user)
    return res.json(filteredMessages)
  }

  return res.json(messages)
})

app.get('/api/mensajes/:id', (req, res) => {
  // const id = req.params.id
  const { id } = req.params 
  const message = messages.find(message => message.id === Number(id))

  if (!message) {
    return res.status(404).json({
      error: 'Message not found'
    })
  }

  return res.json(message)
})

app.post('/api/mensajes', (req, res) => {
  const message = req.body

  message.id = messages.length + 1

  messages.push(message)

  return res.status(201).json(message)
})

app.put('/api/mensajes/:id', (req, res) => {
  const { id } = req.params

  const body = req.body

  const message = messages.find(message => message.id === Number(id))

  if (!message) {
    return res.status(404).json({
      error: 'Message not found'
    })
  }

  message.message = body.message
  message.user = body.user

  return res.json(message)

})

app.delete('/api/mensajes/:id', (req, res) => {
  const { id } = req.params

  const index = messages.findIndex(message => message.id === Number(id))

  if (index === -1) {
    return res.status(404).json({
      error: 'Message not found'
    })
  }

  messages.splice(index, 1)

  return res.status(204).json({})
})

app.get('/api/usuarios', (req, res) => {})

app.get('/api/cientes', (req, res) => {})

app.get('/api/productos', (req, res) => {})

const PORT = 8080

const server = app.listen(PORT, () => console.log(`Servidor HTTP escuchando en el puerto ${PORT}`))

server.on('error', err => console.log(`Error en servidor: ${err}`))


