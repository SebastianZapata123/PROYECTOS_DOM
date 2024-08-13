/* 5) Programa una función que 
invierta las palabras de una cadena de texto, pe. 
miFuncion("Hola Mundo") devolverá "odnuM aloH". */

const STRING = (string = "") => { 
    !string ? console.warn("No data")  
    :console.info(string.split("").reverse())
}

STRING("Qué hago con mi vida?")
