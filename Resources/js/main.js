function openMenu(){
    document.getElementById('nav-menu').style.width = "100%";
}
function closeMenu(){
    document.getElementById('nav-menu').style.width = "0%";
}

var mixer = mixitup('.portfolio-grid');


new WOW().init();

//smooth scroll
$('.hero-icon a, .nav-container ul li a').on('click', function(){
    $('html, body').animate({
        scrollTop:$($.attr(this, 'href')).offset().top
    },1000);

    return false
})
