//entrada
const right = document.getElementById("direita");


//processamentos e funções
direita.addEventListener("click", function(){
    window.location.href = "slide2.html"
});

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight"){
        window.location.href = "slide2.html"
    }
})

