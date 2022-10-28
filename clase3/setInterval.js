const intervalId = setInterval(() => {
  console.log('logueando...')
}, 1000)

setTimeout(() => {
  clearInterval(intervalId)
}, 10000)