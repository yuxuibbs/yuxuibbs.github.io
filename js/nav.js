var resizeNav = function resizeNavbar() {
    var windowWidth = parseInt($(window).width());
    if (windowWidth < 835) {
        $(".nav").css("width", '100%');
    }
    else if (windowWidth > 1185) {
        $(".nav").css("width", windowWidth - 100 + 'px');
    }
    else {
        $(".nav").css("width", windowWidth - 425 + 'px');
    }
}

$(document).ready(resizeNav);
window.addEventListener('resize', resizeNav);
