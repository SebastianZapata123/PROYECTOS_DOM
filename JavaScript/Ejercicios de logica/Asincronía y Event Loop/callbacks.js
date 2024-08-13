


/* Gestión de archivos */ 

const fs = require("fs");

const escribirArchivo = () => {
    fs.writeFile("sample.txt", "contenido a escribir", (err) =>{
        if (err) throw err;
        console.log("Completado!")
    })
}


function readFile (archivo, callback){
    fs.readFile(archivo, callback)
}

const callback = (err, data) =>{
    if(err) throw err; 
    console.log(data.toString());
}

readFile("sample.txt", callback)





/*   Iteración de elementos asincronica    */ 

const arr = [1,2,3,4,5]

function recorrer(arr) {
    arr.forEach(item => console.log(item))
}

recorrer(arr)




