


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

cuadradoPromise(0)
    .then((obj) => {
        console.log(obj)
        return cuadradoPromise(1)
    })
    .then((obj) => {
        console.log(obj)
        return cuadradoPromise(2)
    })
    .then((obj) => {
        console.log(obj)
        return cuadradoPromise({})
    })
    .then((obj) => {
        console.log(obj)
        return cuadradoPromise(4)
    })
    .then((obj) => {
        console.log(obj)
        return cuadradoPromise(5)
    })
    .catch(err => console.error(err));


