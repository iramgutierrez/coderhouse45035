const express = require('express')
const { Router } = express

const persona = [
  {
    id: 1,
    nombre: 'luis',
    apellido: 'lopez',
    edad: 31
  },
  {
    id: 2,
    nombre: 'sol',
    apellido: 'martinez',
    edad: 28
  },
  {
    id: 3,
    nombre: 'juan',
    apellido: 'lopez',
    edad: 25
  },
]

const personaRouter = new Router()

personaRouter.get('/', (req, res) => {
    const { query } = req
  
    return res.json(persona)
  })
  

module.exports = personaRouter