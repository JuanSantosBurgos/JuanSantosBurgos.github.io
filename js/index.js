//alto de las imagenes
var h = $(window).height();
$(".alto").height(h);



//menu lateral
$(document).ready(function() {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function() {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

//slider
$('.owl-carousel').owlCarousel({
    margin: 10,
    autoWidth: true,
    autoPlay: 3000,
    paginationSpeed: 200,

    loop: true,
    nav: true,
    navText: ['<i class="glyphicon glyphicon-menu-left" aria-hidden="true"></i>', '<i class="glyphicon glyphicon-menu-right" aria-hidden="true"></i>']
})