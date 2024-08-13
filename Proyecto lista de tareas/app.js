const input = document.getElementById('ingresar-tarea')
const boton = document.querySelector("button")
const listaDeTareas = document.getElementById("lista-de-tareas")

function agregarTarea(){
    if(input.value){
        //crear tarea
        let tareaNUeva = document.createElement("div")
        tareaNUeva.classList.add("tarea")

        // texto ingresado por usuario
        let texto = document.createElement("p")
        texto.innerText = input.value
        tareaNUeva.appendChild(texto)


        //Contenedor iconos
        let iconos = document.createElement("div")
        iconos.classList.add("iconos")
        tareaNUeva.appendChild(iconos)



        let completar = document.createElement("i")
        completar.classList.add("bi","bi-check-circle-fill", "icono-completar")
        completar.addEventListener("click", completarTarea)


        let eliminar = document.createElement("i")
        eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar")
        eliminar.addEventListener("click", eliminarTarea)
        iconos.append(completar, eliminar);

        /// Agregar nueva tarea 
        listaDeTareas.appendChild(tareaNUeva)
    } else{
        alert("Porfavor ingresa una tarea")
    }
}


function completarTarea(event){
    let tarea = event.target.parentNode.parentNode
    tarea.classList.toggle("completada")
}


function eliminarTarea(event){
    let tarea = event.target.parentNode.parentNode
    tarea.remove()    
}
boton.addEventListener("click", agregarTarea)

input.addEventListener("keydown", (e)=>{
    if (e.key === "Enter"){
        agregarTarea()
    } 

    
})