/* 4) Programa una función que repita un texto X 
veces, pe. miFuncion('Hola Mundo', 3) devolverá
 Hola Mundo Hola Mundo Hola Mundo. */

 function repetir(a ,b) {
    const repeticion = () => {
        return a.repeat(b)
    }
    let string = repeticion()
    console.log((string))
 }

 repetir("Hola", 109)