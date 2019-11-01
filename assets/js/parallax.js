//PARALLAX

$(window).scroll(function(){
    parallax();
});
  
function parallax(){
    var scrolled = $(window).scrollTop();
    $('header.cover .image').css('top',-(scrolled*0.1)+'px');
    $('header.cover .welcome').css('top',0+(scrolled*0.1)+'%');
    $('header.cover .welcome').css('opacity',1-(scrolled*0.01)/10);
    $('header.cover .welcome').css('opacity',1-(scrolled*0.01)/10);
};