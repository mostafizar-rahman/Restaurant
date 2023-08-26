$(document).ready(function () {
    $(".partners").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {

            600: {
                items: 3,
            },
            1000: {
                items: 6,
            }
        },
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
    });
});  