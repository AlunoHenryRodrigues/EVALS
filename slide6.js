// Entrada de elementos
const right = document.getElementById("direita");
const left = document.getElementById("esquerda");

// Navegação por clique nos botões
right.addEventListener("click", function(){
    window.location.href = "";
});

left.addEventListener("click", function(){
    window.location.href = "slide5.html";
});

// Navegação pelas setas do teclado
document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight"){
        window.location.href = ""; 
    }
});

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowLeft"){
        window.location.href = "slide5.html";
    }
});