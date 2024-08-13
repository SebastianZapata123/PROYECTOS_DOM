const $menuEl = document.querySelector(".menu");
const $menuText = document.querySelector(".menu p");

const $socialListEl = document.querySelector(".social-lists")
const $arrowIconEl = document.querySelector(".menu .fas")
const $lisEl = document.querySelectorAll(".social-lists li")

$menuEl.addEventListener("click", ()=>{
    $socialListEl.classList.toggle("hide")
    $menuEl.classList.toggle("rotate")
})

$lisEl.forEach(liEl => {
    liEl.addEventListener("click", ()=>{
        $menuText.innerHTML = liEl.innerHTML
        $socialListEl.classList.add("hide")
        $menuEl.classList.toggle("rotate")
    })
})