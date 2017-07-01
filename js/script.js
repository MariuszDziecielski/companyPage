$(function () {
    $('.navbar-collapse a').on('click', function () {
        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-toggle').click();
        }
    });
});