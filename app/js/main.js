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
  if ($('header.header .menu--main').length > 0) {
    var $mainMenu = $('header.header .menu--main');

    $('.has-children', $mainMenu).each(function() {
      // Only slide, if on desktop/wide tablet.
      if ($(window).width() < 960) {
        return true;
      };

      var $this = $(this);

      $('> a', $this).click(function(e) {
        var $ul = $('> ul', $this);
        e.preventDefault();

        if ($ul.is(':visible')) {
          $ul.hide('blind', { direction: 'left' }, 600, function() {
            $this.removeClass('open');
          });
        }
        else {
          $ul.show('blind', { direction: 'left' }, 600, function() {
            $this.addClass('open');
          });
        }
      });
    });
  };
});
