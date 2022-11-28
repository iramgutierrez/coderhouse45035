const express = require('express')
const { engine } = require('express-handlebars')

const app = express()

app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'index.hbs',
  layoutsDir: `${__dirname}/views/layouts`,
  partialsDir: `${__dirname}/views/partials`
}))


app.set('views', './views')
app.set('view engine', 'hbs')

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  const input = {
    comision: 45035,
    alumnos: [
      { nombre: 'Alejandro', apellido: 'Ospina' },
      { nombre: 'Andrea', apellido: 'Alvarado' },
      { nombre: 'Erlin', apellido: 'Díaz' },
      { nombre: 'Javier', apellido: 'Rivera' },
      { nombre: 'Maria', apellido: 'Scalise' },
    ]
  }
  return res.render('layouts/main', input)
})

app.get('/desafio', (req, res) => {
  const input = {
    nombre: 'Iram',
    apellido: 'Gutiérrez',
    edad: 33,
    email: 'iram@mail.com',
    telefono: '5512345678'
  }
  return res.render('layouts/desafio', input)
})

const PORT = 8080

const server = app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))

server.on('error', err => console.log(`Error en servidor: ${err}`))
