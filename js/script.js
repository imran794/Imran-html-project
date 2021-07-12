var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

})


/*================================
        load  part start
==================================*/


window.addEventListener("load", function () {

    var finish = document.querySelector(".load");

    finish.classList.add("load_finish")
});

/*================================
        load  part end
==================================*/


/*================================
        manu fix part start
==================================*/



$(window).scroll(function () {

    var scroll = $(this).scrollTop();

    if (scroll > 130) {
        $(".menu").addClass("menu_fix");
    } else {
        $(".menu").removeClass("menu_fix")
    }

});



/*================================
        manu fix part end
==================================*/



/*================================
        anq part end
==================================*/



$(window).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll > 300) {
        $(".anq").fadeIn();
    } else {
        $(".anq").fadeOut();
    }
});


/*================================
        anq part end
==================================*/



/*================================
        mixer  part start
==================================*/


var mixer = mixitup('.cont');



/*================================
        mixer  part end
==================================*/


/*================================
    latest_slick  part start
==================================*/


$('.latest_slick').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
  ]
});


/*================================
    latest_slick  part end
==================================*/


/*================================
    Test_slick  part start
==================================*/

$('.Test_slick').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
  ]
});

/*================================
    Test_slick  part end
==================================*/


/*================================
    blog_slick  part start
==================================*/


$('.blog_slick').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: false,
    arrows: false,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
    }
  ]
});


/*================================
    blog_slick  part end
==================================*/



/*================================
    type  part start
==================================*/



var typed = new Typed('.element', {

    strings: [
    "Web Designer",
      "Web Developer",
  ],
    stringsElement: null,

    typeSpeed: 400,

    startDelay: 100,

    backSpeed: 0,
    smartBackspace: false,

    shuffle: true,
    backDelay: 700,
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 100,

    loop: true,



});

/*================================
    type  part end
==================================*/
