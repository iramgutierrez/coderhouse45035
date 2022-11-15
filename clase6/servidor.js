const http = require('http')

const server = http.createServer((peticion, respuesta) => {
  const url = peticion.url

  switch(url) {
    case '/usuarios':
      return respuesta.end('URL de usuarios')
    case '/productos':
      return respuesta.end('URL de productos')
    case '/clientes':
      return respuesta.end('URL de clientes')
    default:
      return respuesta.end('Hola mundo')
  }
})

const connectedServer = server.listen(8080, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${connectedServer.address().port}`)
})
