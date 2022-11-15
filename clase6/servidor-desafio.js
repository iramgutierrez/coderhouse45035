const http = require('http')

const getHour = () =>{
  var d = new Date();
  var n = d.toLocaleTimeString();

  const hour = Number(n.substring(0, 2))
  return hour
}

const server = http.createServer((peticion, respuesta) => {
    const url = peticion.url

    switch (url) {
      case '/hora':
        const hour = getHour()

        let mensaje

        if (hour >= 6 && hour < 13) {
          mensaje = 'Buenos dias'
        } else if (hour >= 13 && hour < 19) {
          mensaje = 'Buenas tardes'
        } else {
          mensaje = 'Buenas noches'
        }

        /* let mensaje = (hour >= 6 && hour < 13) 
          ? 'Buenos dias' 
          : (hour >= 13 && hour < 19) 
            ? 'Buenas tardes' 
            : 'Buenas noches' */

        
        return respuesta.end(mensaje)

      default:
        return respuesta.end('Hola mundo')
    }
})

const connectedServer = server.listen(8080, () => {
    console.log(`Servidor HTTP escuchando en el puerto ${connectedServer.address().port}`)
})