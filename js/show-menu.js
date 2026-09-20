
// delegated so it still works after nav is injected asynchronously by load-nav.js
$(document).on('click', '.toggle-button', function() {
    $(this).toggleClass('button-open');
    $('.slideout-nav').toggleClass('nav-show');
});

$(document).on('click', '.nav-item', function() {
    $('.slideout-nav').toggleClass('nav-show');
    $('.toggle-button').toggleClass('button-open');
});