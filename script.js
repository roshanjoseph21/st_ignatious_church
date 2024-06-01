$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ["<div class='owl-prev'><i class='fa fa-chevron-left'></i></div>", "<div class='owl-next'><i class='fa fa-chevron-right'></i></div>"],
        dots: false
    });

    // Smooth scroll to sections and handle active link
    $('nav a, .overlay a').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }

        $('nav a').removeClass('active');
        $(this).addClass('active');
        $('#nav').css('background-color', 'black');
        closeNav();
    });
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btt").style.display = "block";
    } else {
        document.getElementById("btt").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
