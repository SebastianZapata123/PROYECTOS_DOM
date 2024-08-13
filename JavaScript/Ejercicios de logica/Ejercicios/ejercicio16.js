/* 16) Programa una función que devuelva el 
monto final después de aplicar un 
descuento a una cantidad dada, pe. miFuncion(1000, 20) 
devolverá 800. */
const calcularDescuento = (value = undefined, b = undefined) => {
    if(value === undefined) return console.log("Error data value")
    if(b === undefined) return console.log("Error data value")
    if(typeof value !== "number") return console.log("Error datatype")
    if(typeof b !== "number") return console.log("Error datatype")


    let descuento = (b / 100) * value 
    return console.log(value - descuento)
}

calcularDescuento(100,50)