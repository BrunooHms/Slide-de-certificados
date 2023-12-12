document.getElementById("radio1").checked = true

let contador = 1;

function nextImage(){
    contador++
    if(contador > 7){
        contador = 1;
    }

    document.getElementById(`radio${contador}`).checked = true
} 

setInterval(function(){
    nextImage();
}, 5000)