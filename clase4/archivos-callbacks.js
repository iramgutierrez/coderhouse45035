const fs = require('fs')

const contenido = `Texto escrito dese Node.js
Segunda linea modificada`

const contenidoExtra = `
ESTO ES UN CONTENIDO EXTRA
`

fs.readFile('./test-input-callbacks.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err.message)
    return
  }
  console.log(data)

  fs.writeFile('./test-output-callbacks.txt', contenido, (err) => {
    if (err) {
      console.error(err.message)
      return
    }
    console.log('archivo escrito')
    fs.appendFile('./test-output-callbacks.txt', contenidoExtra, err => {
      if (err) {
        console.error(err.message)
        return
      }
      console.log('archivo actualizado')

      fs.unlink('./test-output-callbacks.txt', err => {
        if (err) {
          console.error(err.message)
          return
        }

        console.log('archivo eliminado')

        fs.mkdir('./nuevacarpeta-callbacks', err => {
          if (err) {
            console.error(err.message)
            return
          }

          console.log('nueva carpeta creada')

          fs.readdir('./', (err, nombres) => {
            if (err) {
              console.error(err.message)
              return
            }

            console.log(nombres)
          })
        })
      })
    })
  })
    
  
})