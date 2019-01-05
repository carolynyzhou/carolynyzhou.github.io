
$(document).ready(function() {

    var $toggleButton = $('.toggle-button'),
        $menuWrap = $('.menu-wrapper'),
        $sidebarArrow = $('.sidebar-menu-arrow');

    // Hamburger button

    $toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
    });

    // Sidebar navigation arrows

    $sidebarArrow.click(function() {
        $(this).next().slideToggle(300);
    });

});