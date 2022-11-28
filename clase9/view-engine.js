const express= require('express')
const fs = require('fs')

const app = express()

app.engine('coder', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) {
      return callback(new Error(err))
    }

    const output = content.toString()
      .replace('#title#', options.title)
      .replace('#message#', options.message)
      .replace('#profesor#', options.profesor)

    return callback(null, output)
  })
})

app.set('views', './views')
app.set('view engine', 'coder')

app.get('/', (req, res) => {
  const input = {
    title: 'Hola Coders!',
    message: 'Bienvenidos a su clase 9',
    profesor: 'Iram Gutiérrez'
  }

  return res.render('index', input)
})

const PORT = 8080

const server = app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))

server.on('error', err => console.log(`Error en servidor: ${err}`))