var elButton = document.querySelector(".header-button");
var elHeader = document.querySelector(".site-header");
var elHero = document.querySelector(".hero");
var elInput = document.querySelector(".hero-input");
var elSelect = document.querySelector(".hero-select");
var elBox = document.querySelectorAll(".country-box");


elButton.addEventListener("click", function(){
    elHeader.classList.toggle("header-dark")

    elHero.classList.toggle("hero-dark")
})
