/*const delay = ret => {
  for (let i=0; i < ret*3e6; i++) {

  }
}

const hacerTarea = (num) => {
  console.log(`Haciendo tarea ${num}`)
  delay(500)
}

console.log('inicio de tareas')
hacerTarea(1)
hacerTarea(2)
hacerTarea(3)
hacerTarea(4)
console.log('Fin de las tareas')*/

const hacerTarea = (num, cb) => {
  console.log(`Haciendo tarea ${num}`)
  setTimeout(cb, 500)
}

console.log('inicio de tareas')
hacerTarea(1, () => {
  hacerTarea(2, () => {
    hacerTarea(3, () => {
      hacerTarea(4, () => {
        console.log('Fin de las tareas')
      })
    })
  })
})