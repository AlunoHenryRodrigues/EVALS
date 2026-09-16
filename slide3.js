//entrada
const right = document.getElementById("direita");
const left = document.getElementById("esquerda");


//processamentos e funções
direita.addEventListener("click", function(){
    window.location.href = "slide4.html"
});

esquerda.addEventListener("click", function(){
    window.location.href = "slide2.html" 
});


document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight"){
        window.location.href = "slide4.html" 
    }
})

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowLeft"){
        window.location.href = "slide2.html"
    }
})