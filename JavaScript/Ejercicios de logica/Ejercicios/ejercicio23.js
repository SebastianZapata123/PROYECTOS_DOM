/*23) Programa una función que dado un array de números devuelva un objeto con
 2 arreglos en el primero almacena los números
  pares y en el segundo los impares, pe. miFuncion
  ([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], 
    impares: [1,3,5,7,9]}.
 */


const esImparPar = (arr = undefined) => {
  if(arr === undefined) return console.warn("No data")
  if(!(arr instanceof Array)) return console.warn("Not is a Array")
  if(arr.lenght === 0) return console.warn("No info in array")

  for (let num of arr) {
      if(typeof num !== "number") return console.log("Not is a number");
  }

  return console.warn({
    pares: arr.filter(num => num % 2 === 0),
    impares: arr.filter(num => num % 2 === 1)
  })


  
}

esImparPar([0,1,2,3])


