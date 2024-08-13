/* 22) Programa una función que dado un array devuelva el número mas 
alto y el más bajo de dicho array,
 pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/


 const arrayMinMax = (arr = undefined) => {
    if(arr === undefined) return console.warn("No data")
    if(!(arr instanceof Array)) return console.warn("Not is a Array")
    if(arr.lenght === 0) return console.warn("No info in array")

    for (let num of arr) {
        if(typeof num !== "number") return console.log("Not is a number");
    }
    return console.warn(Math.max(...arr), Math.min(...arr))

 }
 arrayMinMax([1, 4, 5, 99, -60])


 

