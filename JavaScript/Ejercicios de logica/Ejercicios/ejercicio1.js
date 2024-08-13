
  /* 1) Programa una función que cuente el número de caracteres de una 
  cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */


let persona = {
     nombre: "juan",
     apellido: "carlos",
     intereses: ["basket", "natacion"],
     edad: 21
}

function miFuncion() {

     const metodos = Object.getOwnPropertyNames(persona)  
     console.log(metodos[0])
     /* Aqui ingresamos a los metodos del objeto "persona"
     guardandolos en una constante y indicando la posicion del array 
     para mostrar la propiedad.   ej:    posicion 0 es "nombre" 
      pocision 1 es "apellido"    */


     const valor = Object.getOwnPropertyDescriptors(persona)
     console.log(valor.nombre.value.length)
     /* Aqui ingresamos a los valores de los metodos del objeto persona usando 
     getOwnPropertyDescriptors, primero tenemos q guardar el valor en una constante
     Ej: juan === 4 por el .length 
     */
}

/* miFuncion() */ 


function contarCaracteres(string = "") {
     !string  ? console.warn("No data") : console.info(string.length)
}  


contarCaracteres("")

const ContarCaracteres = (string = "") => !string ? console.warn("No DATA") : console.info(string.length)


