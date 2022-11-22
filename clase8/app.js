const express = require('express')

const messagesRouter = require('./messagesRouter')

const app = express()

const globalMiddleware = (req, res, next) => {
  console.log(`Time: ${Date.now()}`) // unix time
  return next()
}

app.use(globalMiddleware)

const rootMiddleware = (req, res, next) => {
  console.log('Requrest recibido a la ruta raiz /')
  return next()
}

const rootMiddleware2 = (req, res, next) => {
  console.log('Middleware 2 - Requrest recibido a la ruta raiz /')
  return next()
}

app.get('/', rootMiddleware, rootMiddleware2, (req, res) => {
  throw new Error('Error inesperado en ruta raiz')
  return res.json({ status: 'ok' })
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/mensajes', messagesRouter)

app.use((err, req, res, next) => {
  console.log(err.message)

  return res.status(500).json({
    error: err.message
  })
})

const PORT = 8080

const server = app.listen(PORT, () => console.log(`Servidor HTTP est escuchando en el puerto ${PORT}`))

server.on('error', err => console.log(`Error en servidor: ${err}`))