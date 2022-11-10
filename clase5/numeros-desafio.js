const array = []

const generateRandom = () => {
    return Math.floor(Math.random() * 20) + 1 // 0.2 --> 1 19.50 -> 20 -> 21
}

for (let i = 0; i < 10000; i++) {
    const random = generateRandom()
    array.push(random)
}

console.log(array)

/**
 * 
 
{
  "17": 2,
  "15": 2,
  "10": 1
}
 */

/*const numbersObj = {}

for (let i = 0; i < 10000; i++) {
  const number = array[i] // 17, 17, 15, 10

  // {}
  // { "17": 1 }
  // { "17": 2 }
  // {"17": 2, "15": 1 }

  if ( !(number in numbersObj) ) {
    numbersObj[number] = 0
    // { "17": 0 }
    // {"17": 2, "15": 0 }
    // {"17": 2, "15": 1, "10": 0 }
  }

  numbersObj[number]++
  // { "17": 1 }
  // { "17": 2 }
  //  {"17": 2, "15": 1 },
  //  {"17": 2, "15": 1, "10": 1 }
  
}

console.log(numbersObj) */

//console.log({...array})

const numbersObj = array.reduce((acc, number) => {
  if ( !(number in acc) ) {
    acc[number] = 0
  }

  acc[number]++

  return acc
}, {})

console.log(numbersObj)

/*const newArray = array.map((res, {index}) => {
    return { index: res }
})

console.log(newArray)*/


const numeros = [1, 2, 3, 7, 8, 11, 13]

numeros.forEach((element) => {
  console.log(element)
})

const dobles = numeros.map((element) => {
  return element * 2
})

console.log(dobles)

const resultado = numeros.reduce((acc, element) => {
  const sumaAcumulada = acc + element
  console.log(`Aqui tenemos la suma de ${acc} + ${element} que es igual a ${sumaAcumulada}`)

  return sumaAcumulada
}, 0)

console.log(resultado)