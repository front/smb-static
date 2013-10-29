// Custom
jQuery(document).ready(function($) {
  // Set width using remaining space.
  $.fn.fitItemWidth = function() {
    var p = this.parent(),
        w = p.width() - (this.position().left - p.position().left);

    this.width(w > 0 ? w : 0);
  };

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
        e.preventDefault();

        var $ul = $('> ul', $this);

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

  // Search slide/width.
  if ($('header.header .has-form').length > 0) {
    var $hasForm = $('header.header .has-form'),
        resizeTimer = false;

    $hasForm.fitItemWidth();

    $(window).resize(function() {
      if (resizeTimer !== false) {
        clearTimeout(resizeTimer);
      }
      resizeTimer = setTimeout(function() {
        $hasForm.fitItemWidth()
      }, 200);
    });
  };

  // Close block
  $('.close-block').each(function() {
    var $this = $(this);

    $('i', $this).click(function() {
      $this.parent().fadeOut('fast');
    });
  });
});
