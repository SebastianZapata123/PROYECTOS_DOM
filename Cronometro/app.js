const botonInicioPausa = document.getElementById('boton-inicio-pausa')
const botonReiniciar = document.getElementById('boton-reiniciar')
const cronometro = document.getElementById('cronometro')

let[horas,minutos,segundos] = [0, 0, 0]

let intervaloDeTiempo;
let estadoCronometro = "pausado"

function actualizarCronometro(){
    segundos ++
    if(segundos / 60 === 1){
        segundos = 0; 
        minutos++
        if(minutos / 60 === 1){
            minutos = 0
            horas++
        }
    }

    const segundosConFormato = asignarFromato(segundos)
    const minutosConFormato = asignarFromato(minutos)
    const horasConFormato = asignarFromato(horas)

    cronometro.innerText = `${horasConFormato}: ${minutosConFormato}: ${segundosConFormato}`
}

function asignarFromato(unidadDeTiempo){
    return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo
}


botonInicioPausa.addEventListener('click', ()=>{
    if(estadoCronometro === 'pausado'){
        intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
       
        botonInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>'
        botonInicioPausa.classList.remove('iniciar')
        botonInicioPausa.classList.add('pausar')
         estadoCronometro = 'andando'
        
        
    }else  {
        window.clearInterval(intervaloDeTiempo)
        botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>'
        botonInicioPausa.classList.remove('pausar')
        botonInicioPausa.classList.remove('iniciar')
        estadoCronometro = 'pausado'
    }
})

botonReiniciar.addEventListener('click',()=>{
    window.clearInterval(intervaloDeTiempo)
    segundos = 0
    minutos = 0
    horas= 0
    
    cronometro.innerText = '00:00:00'

    botonInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>'
    botonInicioPausa.classList.remove('pausar')
    botonInicioPausa.classList.add('iniciar')
    
    estadoCronometro = 'andando'

})

