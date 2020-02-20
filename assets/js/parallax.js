//PARALLAX

$(window).scroll(function(){
    parallax();
});
  
function parallax(){
    var scrolled = $(window).scrollTop();
    /* $('header.cover .image').css('bottom',-(scrolled*0.05)+'px'); */
    $('header.cover .overlay').css('opacity',0.5+(scrolled*0.008)/10);
    $('header.cover .welcome').css('top',0+(scrolled*0.025)+'%');
    $('header.cover .welcome').css('opacity',1-(scrolled*0.01)/10);
};