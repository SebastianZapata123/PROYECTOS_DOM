/* 7) Programa una función que dada una fecha 
válida determine cuantos años han pasado hasta 
el día de hoy, pe. miFuncion(new Date(1984,4,23)) 
devolverá 35 años (en 2020). */


const calcularAños = (fecha = undefined) => {
    if (fecha === undefined) return console.warn("No es una fecha valida")
    if( !(fecha instanceof Date)) return console.warn("El valor que ingresaste no es una fecha valida")
     HoyMenoslaFecha = new Date().getTime() - fecha.getTime(),
    añosEnMs = 1000 * 60 * 60 * 24 * 365,
    añosHumanos = Math.floor(HoyMenoslaFecha / añosEnMs) 
    return(
        Math.sign(añosHumanos) === -1 ? console.warn(Math.abs(añosHumanos), "Para", fecha.getFullYear())
        : (Math.sign(añosHumanos) === 1 ) 
        ? console.warn(añosHumanos, "años desde", fecha.getFullYear())
        : console.warn(fecha.getFullYear())
    )
}
calcularAños(new Date(1200, 8, 10))



