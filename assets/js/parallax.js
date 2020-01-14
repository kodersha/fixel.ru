//PARALLAX

$(window).scroll(function(){
    parallax();
});
  
function parallax(){
    var scrolled = $(window).scrollTop();
    $('header.cover .image').css('top',-(scrolled*0.05)+'px');
    $('header.cover .image .overlay').css('opacity',0.75+(scrolled*0.005)/10);
    $('header.cover .welcome').css('top',0+(scrolled*0.025)+'%');
    $('header.cover .welcome').css('opacity',1-(scrolled*0.01)/10);
};