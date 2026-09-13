//entrada
const right = document.getElementById("direita");


//processamentos e funções
direita.addEventListener("click", function(){
    window.location.href = "slide1.html" //muda pro arquivo que for o proximo slide
});

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight"){
        window.location.href = "slide1.html" //muda pro arquivo que for o proximo slide
    }
})

