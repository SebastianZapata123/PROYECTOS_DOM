

function cuadradoPromise(value){
    if(typeof value !== "number") return Promise.reject("Error"); 
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({
                value, 
                result: value * value
            })
        }, 0 | Math.random() * 1000)
    })
}

async function funcionAsincrona(){
    try {
        console.log("Inicio de funcion asincrona")
        let obj = await cuadradoPromise(0);
        console.log(obj.value, obj.reslut)
        obj = await cuadradoPromise("a")
        console.log(obj.value, obj.result)

    } catch(err) {
         console.error(err)
    }
}

funcionAsincrona()


const funcionAsincronaEX = async () => {
    
}