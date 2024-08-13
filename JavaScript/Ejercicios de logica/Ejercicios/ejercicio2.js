/* 2) Programa una función que te devuelva el texto recortado
 según el número de caracteres indicados, pe. 
 miFuncion("Hola Mundo", 4) devolverá "Hola".*/

 function valor(a, b) {
    const valorRecortado =  () => {
        return a.slice(0, b)
    }

    let valorfinal = valorRecortado();
    console.log(valorfinal)
 }

 valor("hola mundo", 4)


 