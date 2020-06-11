
// slider

$('.slick-slider').slick({
    dots:true,
    adaptiveHeight:true,
     arrows : false,

});

$('.slick-slider-gelary').slick({
    dots:true,
    adaptiveHeight:true,
    slidesToShow: 2,
    infinite: false,
    responsive: [
    {
      breakpoint: 333,
      settings: {
       slidesToShow: 1,
     }
    }]
});

$('.rooms_hostel_page').slick({
    dots:true,
    // adaptiveHeight:true,
    slidesToShow: 1,
    infinite: false,
    speed: 300

});


//ModileMenu

function MenuOn() {
    let berger=document.getElementById("menuburger");
    let menu=document.getElementsByClassName("nav-mobile")
    let burgeri=document.getElementById("burger");
    let cresti=document.getElementById("crest");
    if (menu[0].style.left =="0px"){
        menu[0].style.left = "-300px";
        cresti.style.display="none";
        burgeri.style.display="block";
    }
    else {
        menu[0].style.left ="0px";
         cresti.style.display="block";
        burgeri.style.display="none";
    }
}

function MenuOff() {
    let menu=document.getElementsByClassName("nav-mobile")
    menu[0].style.left = "-300px";
}
$(document).mouseup(function (e) {
    let container = $("#navmobile");
    let container2 = $(".fixed_nav");
    let burgeri=document.getElementById("burger");
    let cresti=document.getElementById("crest");
    if (container.has(e.target).length === 0  && container2.has(e.target).length === 0){
        document.getElementById("navmobile").style.left = "-300px";
        cresti.style.display="none";
        burgeri.style.display="block";

    }
});

// href

$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});


//blackMenu

function MenuBlackOn() {

    let overflow=document.getElementById("overflow");
    let blackMenu=document.getElementsByClassName("photomore");

    if (blackMenu[0].style.height=="0px"){
        // $(blackMenu[0]).css('height', '100vh')
        blackMenu[0].style.height ="100vh";
        overflow.style.height= "100vh";


    } else {
        blackMenu[0].style.height ="0px";
        overflow.style.height= "auto";
    }
}

function MenuBlackOff() {
    let overflow=document.getElementById("overflow");
   let blackMenu=document.getElementsByClassName("photomore");

       blackMenu[0].style.height ="0px";
       overflow.style.height= "auto";
}

function Acordion() {
    let page=document.getElementById("rooms_hostel_page");
    let inp=document.getElementsByClassName("button_more");


    if (page.style.height === "0px") {
        page.style.height = `${ page.scrollHeight }px`;
        inp[0].innerHTML="Скрыть"
    } else {
        page.style.height = `${ page.scrollHeight }px`;
        window.getComputedStyle(page, null).getPropertyValue("height");
        page.style.height = "0";
        inp[0].innerHTML="Что-то еще?"
    }
}


// comment
//
let i=0;
function GoComment() {
    if (document.querySelector('body').offsetWidth <= 600) {
        let inp=document.getElementById("GoCommentA");
        let page=document.getElementsByClassName("contactus_center_flex");
        if (i==0){page[0].style.height = "0px";}
        if (page[0].style.height === "0px"){
            page[0].style.height = `${ page[0].scrollHeight }px`;
            inp.innerHTML="Скрыть"
            i=0;
        } else {
            page[0].style.height = `${ page[0].scrollHeight }px`;
            window.getComputedStyle(page[0], null).getPropertyValue("height");
            page[0].style.height = "0";
            inp.innerHTML="Что-то еще?"
        }
i++;
}}
// php

$(document).ready(function() {

    $("#write_comment").submit(function() {
        $.ajax({
            type: "POST",
            url: "codik.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо! Ваше письмо отправлено.");
            $("#write_comment").trigger("reset");
        });
        return false;
    });
});