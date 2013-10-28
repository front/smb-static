// Custom
jQuery(document).ready(function($) {
  // Fastclick
  FastClick.attach(document.body);

  // Main menu
  // Mobile dropdown
  if ($('.nav--main').length) {
    var $navMain = $('.nav--main');

    $('h2', $navMain).click(function() {
      $('.menu--main').slideToggle(300);
    });
  };
});
