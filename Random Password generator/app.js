const $btnEl = document.querySelector(".btn")
const $inputEl = document.getElementById("input")
const $copyIcon = document.querySelector(".fa-copy")
const $alertContainer = document.querySelector(".alert-container")





$btnEl.addEventListener("click", ()=> {
    $alertContainer.innerText = "Password Copied!"
    createPassword()
})

    $copyIcon.addEventListener("click",()=>{
       
        copyPassword()
    })

function createPassword(){
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLenght = 14

    let password  = ""

    for (let i = 0; i < passwordLenght; i++) {
        const randomNum = Math.floor(Math.random() * chars.length)
        password +=  chars.substring(randomNum, randomNum + 1)
    }

    $inputEl.value = password;

}


function copyPassword(){
    $inputEl.select();
    $inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText($inputEl.value)
    
    $alertContainer.classList.remove("active")
    
    setTimeout(()=>{
             $alertContainer.classList.add("active")
           
             

    }, 3000)
   
    setTimeout(()=>{
        $alertContainer.innerText=$inputEl.value
    },1000)

}



