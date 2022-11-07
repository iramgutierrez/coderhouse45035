const fs = require('fs')

fs.readFile('./package.json', 'utf-8', (err, package) => {
  if (err) {
    console.log(err.message)
    throw new Error(err.message)
  }

  const info = {
    contenidoStr: package,
    contenidoObj: JSON.parse(package),
    size: package.length
  }

  console.log(info)

  fs.writeFile('./info.txt', JSON.stringify(info, null, 2), err => {
    if (err) {
      console.log(err.message)
      throw new Error(err.message)
    }

    console.log('archivo info.txt escrito con exito')
  })
})