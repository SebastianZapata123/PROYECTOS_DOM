
const $star = document.querySelectorAll('.fa-star')
const $emoji = document.querySelectorAll('.far')

$star.forEach(($star, index ) =>{
    $star.addEventListener("click", ()=>{
        updateRating(index)
    })
})


updateRating(0)

function updateRating(index){
    $star.forEach(($star, idx) =>{
        if(idx < index + 1){
            $star.classList.add('active')
        }else{
            $star.classList.remove('active')
        }
    })

    $emoji.forEach(($emoji)=>{
        $emoji.style.transform = `translateX(-${index * 50}px` 
        if(index === 0){
            $emoji.style.color = "rgb(252, 3, 3)"
        } else if (index === 1){
            $emoji.style.color = "rgb(252, 152, 3)"
        
        } else if (index === 2){
            $emoji.style.color = "rgb(252, 223, 3)"

        } else if (index === 3){
            $emoji.style.color = "rgb(69, 252, 3)"
        } else if (index === 4){
            $emoji.style.color = "rgb(3, 252, 161)"

        }
    })



    

}

