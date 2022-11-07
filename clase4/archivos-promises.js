const fs = require('fs')

const contenido = `Texto escrito dese Node.js
Segunda linea modificada`

const contenidoExtra = `
ESTO ES UN CONTENIDO EXTRA
`

/*fs.promises.readFile('./test-input-promises.txt', 'utf-8')
  .then(data => {
    console.log(data)

    return fs.promises.writeFile('./test-output-promises.txt', contenido)
  })
  .then(_ => {
    console.log('archivo generado')

    return fs.promises.appendFile('./test-output-promises.txt', contenidoExtra)
  })
  .then(_ => {
    console.log('archivo actualizado')

    return fs.promises.unlink('./test-output-promises.txt')
  })
  .then(_ => {
    console.log('archivo eliminado')
  })
  .catch(e => {
    console.error(e.message)
  }) */

  ;(async () => {

    try {

      const data = await fs.promises.readFile('./test-input-promises.txt', 'utf-8')
      console.log(data)

      await fs.promises.writeFile('./test-output-promises.txt', contenido)

      console.log('archivo generado')

      await fs.promises.appendFile('./test-output-promises.txt', contenidoExtra)

      console.log('archivo actualizado')

      await fs.promises.unlink('./test-output-promises.txt')

      console.log('archivo eliminado')

    } catch (e) {
      console.error(e.message)
    }
  })()