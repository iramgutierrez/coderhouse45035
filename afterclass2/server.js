const express = require('express')
const app = express()
const { engine } = require('express-handlebars')


app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'index.hbs',
  layoutsDir: `${__dirname}/views/layouts`,
  partialsDir: `${__dirname}/views/partials`
}))

app.set('views', './views/layouts')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  return res.json({
    status: 'ok'
  })
})

app.use('/public', express.static('./public'))

app.get('/saludo', (req, res) => {
  const params = {
    name: 'Iram'
  }
  return res.render('saludo', params)
})

const PORT = 8080

const server = app.listen(PORT, () => console.log(`Servidor HTTP corriendo en el puerto ${PORT}`))

server.on('error', err => console.log(`Error en servidor: ${err}`))