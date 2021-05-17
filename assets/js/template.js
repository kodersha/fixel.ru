jQuery(function($) {

    // Function which adds the 'animated' class to any '.animatable' in view
    var doAnimations = function() {
      
        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
        
        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', doAnimations);
        }
        
        // Check all animatables and animate them if necessary
            $animatables.each(function(i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 300) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });
        
    };
    
    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html, body').animate({scrollTop: aTag.offset().top},'slow');
}

hljs.configure ({ useBR: true });  

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre').forEach((block) => {
        hljs.highlightBlock(block);
    });
});

$(".main-work .section-description .title a, .main-work .section-blog .articles").hover(
    function () {
        $('.main-work .section-blog .articles').addClass('hover');
        $('.main-work .section-description').addClass('hover');
    },
    function () {
        $('.main-work .section-blog .articles').removeClass("hover");
        $('.main-work .section-description').removeClass("hover");
    }
);
$(".main-blog .section-description .title a, .main-blog .section-blog .articles").hover(
    function () {
        $('.main-blog .section-blog .articles').addClass('hover');
        $('.main-blog .section-description').addClass('hover');
    },
    function () {
        $('.main-blog .section-blog .articles').removeClass("hover");
        $('.main-blog .section-description').removeClass("hover");
    }
);