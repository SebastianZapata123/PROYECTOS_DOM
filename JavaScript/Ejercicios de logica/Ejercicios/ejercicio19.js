/* 19) Programa una función que valide que un texto sea un 
nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/

const validarNombre = (nombre = "") => {
    if(!nombre) return console.warn("No data")
    if(typeof nombre !== "string") return console.warn("Not is a string")
 

    let expReg = /^[A-Za-zÑñsÁÉÍÓÚáéíóú\s]+$/g.test;

    return expReg = true ? console.warn("Valid name")
    : console.warn("Indavid name")
    
}


validarNombre(2)


