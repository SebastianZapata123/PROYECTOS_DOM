

/* Código Asíncrono No Bloqueante */
(() =>{
    console.log("Código Síncrono");
    console.log("Inicio")

    function dos(){
        setTimeout(
           function callback_Dos() {
                console.log("Dos")
            }, 1000)
        }

    function uno() {
        setTimeout(
            function callback_Uno(){
                console.log("Uno")
            },0)
            dos()
        console.log("Tres")
    }

    uno()
    console.log("Fin")
})()

