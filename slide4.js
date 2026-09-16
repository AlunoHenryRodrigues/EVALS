//entrada
const right = document.getElementById("direita");
const left = document.getElementById("esquerda");


//processamentos e funções
direita.addEventListener("click", function(){
    window.location.href = "slide5.html" //muda pro arquivo que for o proximo slide
});

esquerda.addEventListener("click", function(){
    window.location.href = "slide3.html" //muda pro arquivo que for o slide anterior
});


document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight"){
        window.location.href = "slide5.html" //muda pro arquivo que for o proximo slide
    }
})

document.addEventListener("keydown", function(event){
    if (event.key === "ArrowLeft"){
        window.location.href = "slide3.html" //muda pro arquivo que for o slide anterior
    }
})