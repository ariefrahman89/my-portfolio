$(document).ready(function () {
    $('.carousel-control-prev').hide();
    $('.carousel-control-next').hide();
    $('.carousel-caption').hide();
    $('img[alt = imgAlt], .carousel-indicators, .carousel-caption').mouseenter(function () {
        $('.carousel-caption').show();
        $('.carousel-control-prev').show();
        $('.carousel-control-next').show();
        $('.carousel-inner').addClass('pointer');
    }).mouseout(function () {
        $('.carousel-caption').hide();

    });
});

//Get the button
var mybuttonUp = document.getElementById("myBtn-up");
window.onscroll = function () { scrollFunctionUp() };


function scrollFunctionUp() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybuttonUp.style.display = "block";
    } else {
        mybuttonUp.style.display = "none";
    }
}

$('#myBtn-up').click(function () {    
    $('body,html').animate({
        scrollTop: 0                       
    }, 1000);
});


$('.page-scroll').on('click', function (e) {
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 0
    }, 1250, 'easeInOutExpo');
    e.preventDefault();

});


var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}