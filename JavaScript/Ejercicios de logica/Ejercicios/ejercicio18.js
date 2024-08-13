/* 18) Programa una función que dada una cadena de texto cuente el
 número de vocales y consonantes, pe. miFuncion("Hola Mundo") 
 devuelva Vocales: 4, Consonantes: 5. */ 

const contarLetras = (cadena = "") =>{
    if(!cadena) console.warn("No data")
    if(typeof cadena !== "string") return console.warn("Not is a string")
     
    let vocales = 0, 
        consonantes = 0

    cadena = cadena.toLocaleLowerCase();

    for (let letra of cadena) {
        if(/[aeiouáéíóú]/.test(letra)) vocales ++;
        if(/[bcdfghjkmnñpqrstvwxyz]/.test(letra)) consonantes ++;
        
        
    }

    return console.info({
        cadena,
        vocales,
        consonantes

    })
}

contarLetras()