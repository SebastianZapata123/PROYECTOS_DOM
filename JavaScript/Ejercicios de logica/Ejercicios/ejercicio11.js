/* 11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de todos 
los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const factorial = (numero = undefined) => {
    let factorial = 1; 

    for (let i = numero; i>1; i--) {
        factorial = factorial * i
    }

    console.log(factorial)
}

factorial(3)
