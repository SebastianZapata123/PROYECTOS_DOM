/* 3) Programa una función que dada una String te devuelva 
un Array de textos separados por cierto caracter, pe. 
miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

function string (a, b) {
    const separacion = () => {
        return a.split(b)
    }
    let stringModificada = separacion()
    console.log(stringModificada)
}

string("Hola mundo que tal", " ") //Cada que haya un espacio, split lo va a separar con una , 

/* Igual si en la posicion b colocamos 
alguna letra, split cortara la cadena cada vez que encuentre esa letra */

