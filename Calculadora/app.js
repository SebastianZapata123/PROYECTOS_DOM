const $screen = document.getElementById('main-screen')


function calcular(){
    $screen.value = eval($screen.value)
}

function operacion(number){
    $screen.value += number
}

function clearDisplay(){
    $screen.value = ""
}