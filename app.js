$(document).ready(function() {
    var altura = $('.menu-principal').offset().top;

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > altura) {
            $('.menu-principal').addClass('menu-fixed');
        } else {
            $('.menu-principal').removeClass('menu-fixed');
        }
    });

    //movil
    $(".nav-movil").on('click', function() {

        $(".enlaces").slideToggle();
    });

});