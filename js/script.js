$(function () {
    $('.navbar-collapse a').click(function () {
        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-toggle').click();
        }
    });
});