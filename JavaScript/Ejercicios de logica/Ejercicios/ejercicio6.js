/* 6) Programa una función para contar el 
número de veces que se repite una 
palabra en un texto largo, pe. 
miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

const data = (a="", b="") => {
    if (!a) return console.error("No data") // Validacion de datos
    if (!b) return console.error("No data") //Validacion de datos

    let i = 0,
    contador = 0

    while (i !== -1) {
        i = a.indexOf(b, i)
        if(i !== -1) i++, contador++
    }     

    return console.log(contador)   //Ejercicio rompebolas carajo 
}

data("prueb", "adios")