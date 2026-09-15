//entrada
const right = document.getElementById("direita");
const left = document.getElementById("esquerda");


//processamentos e funções
direita.addEventListener("click", function(){
    window.location.href = "slide3.html"
});

esquerda.addEventListener("click", function(){
    window.location.href = "index.html" 
});


document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight"){
        window.location.href = "slide3.html" 
    }
})

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowLeft"){
        window.location.href = "index.html"
    }
})