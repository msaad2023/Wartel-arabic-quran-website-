let audBtn = document.querySelectorAll(".audio-btn");
let value = document.querySelectorAll(".section");
let slider = document.getElementById("audio-slider");
let icon = document.getElementById("icon");
let menuBar = document.querySelector("#menu-bar");
let amenu = document.querySelector(".navbar");



audBtn.forEach (slide => {

    slide.addEventListener("click" , function () {


        document.querySelector(".controls .blue").classList.remove("blue");

        slide.classList.add("blue");
        let src = slide.getAttribute("data-src");
        document.querySelector("#audio-slider").src = src;


        
    })
});





icon.onclick = function () {

    
if (slider.paused) {

    slider.play();
    icon.src = "images/play1-.png"
    
} else {

    slider.pause();
    icon.src = "images/pause.png"

    
}
    
}



function showmenu() {

    menuBar.classList.toggle("fa-times")
    amenu.classList.toggle("active")

    
 }