const toppings = document.getElementsByClassName('topping')

for (const topping of toppings) {
    topping.addEventListener('click', (item)=>{
        console.log(item.target.innerText)
    })
}

