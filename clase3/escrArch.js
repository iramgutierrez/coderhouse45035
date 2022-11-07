module.exports = (mensaje, callback) => {
  // simulamos la escritura del mensaje en el archivo
    setTimeout(() => {
      console.log('escribi en el archivo')
      callback()
    }, 2000)
}

/*module.exports = (mensaje) => {
  // simulamos la escritura del mensaje en el archivo
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('escribi en el archivo')
      //callback()
      resolve(true)
    }, 2000)
  })
}*/