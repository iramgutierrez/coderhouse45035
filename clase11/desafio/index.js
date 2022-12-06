const socket = io()

const input = document.querySelector('input#message')
const button = document.querySelector('button#send')

button.addEventListener('click', () => {
  socket.emit('mensaje', input.value)
})

socket.on('mensajes', data => {
  console.log(data)
  const messages = data
    .map(message => `SocketId: ${message.socketId} -> Mensaje ${message.mensaje}`)
    .join('<br>')

  document.querySelector('p').innerHTML = messages

  console.log(messages)
})

socket.on('nuevoMensaje', data => {
  console.log(data)

  const message = `<br> SocketId: ${data.socketId} -> Mensaje ${data.mensaje}`
  document.querySelector('p').innerHTML += message
})

socket.on('mensajeAutomatico', data => {
  console.log(data)
})