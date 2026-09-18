// Entrada de elementos

const left = document.getElementById("esquerda");


left.addEventListener("click", function(){
    window.location.href = "slide5.html";
});

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowLeft"){
        window.location.href = "slide5.html";
    }
});