$(document).ready(function() {
    function setHeight() {
        windowHeight = $(window).innerHeight();
        $('#hideMe').css('min-height', windowHeight);
    }
    setHeight();
    /*   Mangesh Jadhav */ $(window).resize(function() {
        setHeight();
    });
});

//# sourceMappingURL=index.579125c3.js.map
