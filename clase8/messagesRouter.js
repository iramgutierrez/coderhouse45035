const express = require('express')
const { Router } = express

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

const messagesRouter = new Router()

messagesRouter.use((req, res, next) => {
  console.log('Request recibio al router de mensajes')
  return next()
})

messagesRouter.get('/', (req, res) => {
  // const query = req.query
  const { query } = req

  if (query.user) {
    const filteredMessages = messages.filter(message => message.user === query.user)
    return res.json(filteredMessages)
  }

  return res.json(messages)
})

messagesRouter.get('/:id', (req, res, next) => {
  console.log(`Request recibido a la ruta de detalle de mensajes con id ${req.params.id}`)
  return next()
}, (req, res) => {
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

module.exports = messagesRouter