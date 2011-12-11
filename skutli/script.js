$(function() {
    $(".screenshot-link").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        nextEffect: 'fade',
        prevEffect: 'fade',
        loop: false,
        helpers: {}
    });
    
    $("#old-versions-link").click(function () {
        $(this).hide();
        $("#old-versions").slideDown();
        
        return false;
    });
});