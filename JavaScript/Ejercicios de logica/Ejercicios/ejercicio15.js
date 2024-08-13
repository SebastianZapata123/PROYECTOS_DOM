/* 
15) Programa una función para convertir números 
de base binaria a decimal y viceversa, pe. miFuncion(100,2) 
devolverá 4 base 10. */

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
    if(numero === undefined) return console.log("Not is a number")
    if(typeof numero !== "number") return console.log("Not is a valid number")
    if(base === undefined) return console.log("Base invalid")
    if(typeof base !== "number") return console.log("Not is a base")    
    

    if(base === 2){
        return  console.log(parseInt(numero, base))
    } else if ( base === 10){
        return console.log(numero.toString(base))
    }
}

convertirBinarioDecimal(4,10)  


