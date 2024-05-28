
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {

    if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
        document.getElementById("navbar").style.padding = "0px";
        document.getElementById("head_nav").style.fontSize = "15px";
        document.getElementById("logo_img").style.width = "30px";

    } else{
        document.getElementById("navbar").style.padding = "10px";
        document.getElementById("head_nav").style.fontSize = "20px";
        document.getElementById("logo_img").style.width = "50px";
    }
}

const images = ["Imgs/stair_serv.JPG","Imgs/tg_entry.JPG","Imgs/tg_inside_brown.JPG","Imgs/tg_outside.JPG"];

const carousel = document.querySelector(".carousel")
const interval = setInterval(function(){
    startCarousel();
},3000)

var index = 1;

startCarousel = () =>{
    carousel.style.backgroundImage = `url(${images[index++]})`;

    if(index>images.length-1) index = 0;
}