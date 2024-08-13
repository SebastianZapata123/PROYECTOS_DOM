/* 21) Programa una función que dado un array numérico devuelve otro array con
 los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/


 const number = (arr = undefined) => {
    if(arr === undefined) return console.warn("No data")
    if(!(arr instanceof Array)) return console.warn("Not is a Array")
    if(arr.lenght === 0) return console.warn("No info in array")

    for (let num of arr) {
        if(typeof num !== "number") return console.log("Not is a number");
    }
    const newArray = arr.map(el => el * el)
    return console.log(newArray)
 }

 number([1,9,1,2,3])


