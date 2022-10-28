const mostrarLista = (arrayIngresado) =>{
  console.log(arrayIngresado)
  if (arrayIngresado.length > 0){
      arrayIngresado.forEach(res => console.log(res))
  }else{
      console.log('Lista vacía')
  }
}

//mostrarLista([1,2,3,4])

(
  (arrayIngresado)=>{
      console.log(arrayIngresado)
  if (arrayIngresado.length > 0){
      arrayIngresado.forEach(res => console.log(res))
  }else{
      console.log('Lista vacía')
  }
  }
)([4,3,2,1])

const crearMultiplicador = (a) => {
  return (b)=>{
      return a * b
  }
}

const duplicar = crearMultiplicador(2)
const triplicar = crearMultiplicador(3)

console.log(duplicar(5))
console.log(triplicar(10))