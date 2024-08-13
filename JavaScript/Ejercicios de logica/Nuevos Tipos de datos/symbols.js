const NAME = Symbol("Nombre");
const SALUDAR = Symbol("Saludar"); 

const persona = {
    [NAME]:"Sebastián",
    edad: 23
};

persona[SALUDAR] = () => {
    console.log("Hola papus")
}


for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}

console.log(Object.getOwnPropertySymbols(persona))

