/* 12) Programa una función que determine si un número
 es primo (aquel que solo es divisible por sí mismo y 1) 
 o no, pe. miFuncion(7) devolverá true. */


    
const numeroPrimo = (number = undefined) => {
    let divisible = false; 
    for(let i=2; i < number; i++){
        if (number % i === 0){
            divisible = true
            break; 
        }
    }
    return(divisible) ? console.log("No es primo") : console.log("Si es primo")
}
numeroPrimo(4)


