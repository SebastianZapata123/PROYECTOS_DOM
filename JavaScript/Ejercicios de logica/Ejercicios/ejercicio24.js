/* 24) Programa una función que dado un arreglo de números 
devuelva un objeto con dos arreglos, el primero tendrá los 
numeros ordenados en forma ascendente y el segundo de forma
descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

const esMayorMenor = (arr = undefined) => {
    if(arr === undefined) return console.warn("No data")
    if(!(arr instanceof Array)) return console.warn("Not is a Array")
    if(arr.lenght === 0) return console.warn("No info in array")
  
    for (let num of arr) {
        if(typeof num !== "number") return console.log("Not is a number");
    }

   const comparador = {
    asc: arr.map(a => a).sort((a,b) => {return a - b}),  
    desc: arr.map(a => a).sort((a,b) => {return a - b}).reverse()
   }


   /* 
   Si el resultado de la resta es negativo, a se ordena antes que b
   Si el resultado de la resta es positivo, b se ordena antes que a 
   */


   return console.log(comparador)

}

esMayorMenor([9, 2, 10, 6, 5, 222])