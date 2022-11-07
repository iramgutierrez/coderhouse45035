const fs = require('fs')

const data = fs.readFileSync('./test-input-sync.txt', 'utf-8')

console.log(data)

const contenido = `Texto escrito dese Node.js
Segunda linea modificada`

fs.writeFileSync('./test-output-sync.txt', contenido)

const contenidoExtra = `
ESTO ES UN CONTENIDO EXTRA
`

fs.appendFileSync('./test-output-sync.txt', contenidoExtra)

fs.unlinkSync('./test-output-sync.txt')

try {
  fs.readFileSync('./test-output-sync.txt', 'utf-8')
} catch (e) {
  console.log(e.message)
}

console.log('Continua mi programa')

// fs.mkdirSync('./nuevacarpeta2')

