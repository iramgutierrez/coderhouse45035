const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
// app.set('view engine', 'pug')
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  return res.json({
    status: 'ok'
  })
})

app.get('/hello', (req, res) => {
  return res.render('hello', {
    nombre: 'Iram',
    mensaje: 'Aprendiendo Pug JS con Express'
  })
})

app.get('/datos', (req, res) => {
  const params = {
    value: req.query.nivel,
    min: req.query.min,
    max: req.query.max,
    title: req.query.titulo
  }

  return res.render('datos', params)
})

app.get('/message', (req, res) => {
  const params = {
    message: {
      name: 'Aprendiendo EJS'
    }
  }

  return res.render('message', params)
})

app.get('/home', (req, res) => {
  return res.render('home', { comision: 45035 })
})

app.get('/alumnos', (req, res) => {
  const params = {
    comision: 45035,
    alumnos: [
      { nombre: 'Alejandro', apellido: 'Ospina' },
      { nombre: 'Andrea', apellido: 'Alvarado' },
      { nombre: 'Erlin', apellido: 'Díaz' },
      { nombre: 'Javier', apellido: 'Rivera' },
      { nombre: 'Maria', apellido: 'Scalise' },
      { nombre: 'Alejandra', apellido: 'Pachano' },
      { nombre: 'Ruben', apellido: 'Garay' }
    ]
  }

  return res.render('alumnos', params)
})

const personas = []

app.get('/form', (req, res) => {
  const params = {
    personas
  }
  return res.render('form', params)
})

app.post('/personas', (req, res) => {
  const persona = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: req.body.edad
  }
  personas.push(persona)

  return res.redirect('/form')
})

const PORT = 8080

const server = app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))

server.on('error', err => console.log(`Error en servidor: ${err}`))