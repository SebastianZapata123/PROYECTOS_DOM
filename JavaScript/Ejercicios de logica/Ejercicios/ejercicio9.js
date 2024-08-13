/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */


const random = () => {
    console.log(Math.round(Math.random() * 100 + 500))
}

random()