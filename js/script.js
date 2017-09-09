$(function () {
    $('.navbar-collapse a').click(() => {
        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-toggle').click();
        }
    });
});