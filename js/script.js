 // typing text animation script
 var typed = new Typed(".typing", {
    strings: ["Developper", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// data filter portfolio section
$(document).ready(function(){
$('.filter-item').click(function(){
    const value = $(this).attr('data-filter');
    if(value == 'all'){
        $('.portfolio-items').show(500);
    }
    else{
        $('.portfolio-items').not('.'+value).hide(500);
        $('.portfolio-items').filter('.'+value).show(500);
    }
     // add active class
     $('.filter-item').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
     })
});
// scroll top 
$('#top').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});
})


