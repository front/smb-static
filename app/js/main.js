// Custom
jQuery(document).ready(function($) {
  // Fastclick
  FastClick.attach(document.body);

  // Main menu
  // Mobile dropdown
  $('header.header nav').each(function() {
    var $nav = $(this);

    $('.nav--title', $nav).click(function() {
      $('.menu--dropdown', $nav).slideToggle();
    });
  });

  // Desktop slide
});
