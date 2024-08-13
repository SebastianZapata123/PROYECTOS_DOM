/* 25) Programa una función que dado un arreglo de 
elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) 
devolverá ["x", 10, 2, "10", true].
*/

const esDuplicado = (arr = undefined) => {
    if(arr === undefined) return console.warn("No data")
    if(!(arr instanceof Array)) return console.warn("Not is a Array")
    if(arr.lenght === 0) return console.warn("No info in array")
    return console.warn({
        original: arr,
        sinDuplicados: arr.filter((value, index, self) => self.indexOf(value)===index)
    })
}
esDuplicado([1, 22 ,2,4, "hola", 1, 2, 4])