/* 10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

const NUMBER = (a = 0 ) => {
    if (!a) console.log("Error") 
    let toNumber = a.toString()

    let stringNumber = toNumber.split("").reverse().join("")

    if(stringNumber !== toNumber) {
        console.log(false)
    } else console.log(true)
}

NUMBER()

