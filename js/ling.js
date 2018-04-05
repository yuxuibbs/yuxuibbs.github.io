var resizeMrLing = function resizeLing() {
    var windowWidth = parseInt($(window).width());
    // make Mr. Ling iframe window fit the screen
    // values are determined by observation
    if (windowWidth > 875) {
        $("#ling").css('height', '825px');
    }
    else if (windowWidth < 750) {
        $("#ling").css('height', 1600 - windowWidth + 'px');
    }
    else {
        $("#ling").css('height', Math.max(825, 1800 - windowWidth * 1.2) + 'px');
    }
}

$(document).ready(resizeMrLing);
window.addEventListener("resize", resizeMrLing);
