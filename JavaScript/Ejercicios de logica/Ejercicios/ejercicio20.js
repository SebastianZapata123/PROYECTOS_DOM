/* 20) Programa una función que valide 
que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") 
devolverá verdadero.*/

const verificarEmail = (email = "") => {
    if (!email) return console.warn("No data");
    if (typeof email !== "string") return console.warn("Not is a string");

    let expReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return expReg.test(email)
        ? console.warn("Valid email")
        : console.warn("Invalid email");
}

verificarEmail("correo_invalido@.com");

