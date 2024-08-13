/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */ 

const string = (a ="") => {
    if (!a) return console.info("No data")

    let dataCopy = a.split("").reverse().join("")

    if (dataCopy !== a) {
        return console.log(false)
    } else console.log(true)
}

string("reconocer")

