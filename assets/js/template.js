(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(50392522, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    trackHash:true
});

AOS.init(
    {
        once: true,
    }
);
window.addEventListener('load', AOS.refresh);

$(function() {
    $('a[data-modal]').on('click', function() {
        $($(this).data('modal')).modal({
            fadeDuration: 1000
        });
        return false;
    });
});