// Custom
jQuery(document).ready(function($) {
  // Fastclick
  FastClick.attach(document.body);

  // Main menu
  // Mobile dropdown
  if ($('header.header nav').length) {
    var $navHeader = $('header.header nav');

    $navHeader.each(function() {
      var $nav = $(this);

      $('.nav--title', $nav).click(function() {
        $('.menu--dropdown', $nav).slideToggle();
      });
    });
  };
});
