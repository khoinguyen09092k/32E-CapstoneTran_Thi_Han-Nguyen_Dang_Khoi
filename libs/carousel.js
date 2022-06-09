$(document).ready(function () {


    //carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 2,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            576:{
                items:1,
                nav:false
            },
            768:{
                items:1,
                nav:true,
                loop:false
            },
            1140:{
                items:2,
                nav:true,
                loop:false
            }
        }
    })


    //poup video
    $(".popup-with-zoom-anim").magnificPopup({
        type: "inline",
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: "auto",
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: "my-mfp-zoom-in"
    });
    // // counup
    $('.counter').countUp();
    // wow
    new WOW().init();
});

