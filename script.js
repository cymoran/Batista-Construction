
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {

    if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
        document.getElementById("navbar").style.padding = "0px";
        document.getElementById("head").style.fontSize = "15px";
        document.getElementById("logo_img").style.width = "30px";

    } else{
        document.getElementById("navbar").style.padding = "10px";
        document.getElementById("head").style.fontSize = "20px";
        document.getElementById("logo_img").style.width = "50px";
    }
}

let w = window.innerWidth;
let h = window.innerHeight;
let serv_img = document.querySelectorAll(".serv-img")

if (w <= 800){
    document.querySelectorAll(".serv-img").style.width = '100%';
    document.getElementById(".serv-img").style.height = '80px';

}



