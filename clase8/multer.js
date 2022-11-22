const express = require('express')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, `${file.fieldname}-${Date.now()}.jpg`)
  }
})

const upload = multer({ storage })

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use('/public', express.static('public'))
app.use('/archivos', express.static('uploads'))

app.get('/', (req, res)   => res.json({ status: 'ok' }))

app.post('/uploadFile', upload.single('myFile'), (req, res) => {
  const file = req.file

  return res.json(file)
})

app.post('/uploadMultiple', upload.array('myFiles', 12), (req, res) => {
  const files = req.files

  return res.json(files)
})

const PORT = 8080

const server = app.listen(PORT, () => console.log(`Servidor HTTP escuchando en el puerto ${PORT}`))

server.on('error', err => console.log(`Error en servidor: ${err}`))