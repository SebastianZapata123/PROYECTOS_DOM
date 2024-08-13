/* programa yna funcion 
para convertir grador celsius a fahrenheit y viceversa */


// 0 = Celsius, 1 0 Fahrenheit



const convert = (valor = undefined, indicador = 0) => {


    let fahrenheit = (9 / 5 * valor ) + 32,
     celsius = (valor  - 32) / 1.8 
    indicador === 0 ? console.log(celsius) 
    : console.log(fahrenheit)
    
}

convert(0, 1)



const convertGrades = (grados = undefined, indicador = String) => {

    if(grados === undefined) return console.log("Not is a any indicator")
    if(typeof grados !== "number") return console.log("Not is a number")
    if(typeof indicador !== "string") return console.log("Not is a indicator")
    if(indicador === undefined) return console.log("Not is a any indicator")

    if(indicador.length !== 1 || !/(C|F)/.test(indicador)) console.log("Indicator invalid")
    let fahrenheit = (grados  - 32) / 1.8 , celsius = (9 / 5 * grados ) + 32
    if (indicador === "C") {
        return console.log(Math.round(celsius))
    } else if (indicador === "F"){
        return console.log(Math.round(fahrenheit))
    }
}



 

convertGrades(300,"F")



