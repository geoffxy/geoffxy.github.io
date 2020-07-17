$(document).ready(function() {

  // Scroll to top
  var $sidebar = $("#sidebar");
  var $scrollToTop = $(".scrolltotop");
  var $window = $(window);

  var MIN_WIDTH = 910;
  var showToTop = $window.width() >= MIN_WIDTH;

  var updateToTop = function() {
    var scrollPos = $window.scrollTop();
    var height = $window.height();
    var ratio = scrollPos / height;

    if (ratio > 0.4 && showToTop) {
      $sidebar.fadeIn(200);
    } else {
      $sidebar.fadeOut(200);
    }
  };

  var scrollTo = function(scroll) {
    $('html, body').animate({
      scrollTop: $(scroll).offset().top
    }, 300);
  };

  $window.resize(function() {
    showToTop = $window.width() >= MIN_WIDTH;
    updateToTop();
  });

  $window.scroll(function() {
    updateToTop();
  });

  $sidebar.hover(function() {
    $scrollToTop.addClass("scrolltotophover");
    $sidebar.addClass("sidebarhover");

  }, function() {
    $scrollToTop.removeClass("scrolltotophover");
    $sidebar.removeClass("sidebarhover");
  });

  $sidebar.click(function() {
    scrollTo("#header");
  });

  // Mobile menu
  var $menuButton = $("#menu");
  var $menu = $("#header-menu");

  $menuButton.click(function() {
    $menu.slideToggle();
    return false;
  });

  $("#header-menu a").click(function() {
    $menu.slideUp();
  });

  $(document).click(function(event) {
    var parent = $(event.target).closest($menu);

    if (parent.length === 0) {
      $menu.slideUp();
    }
  });
});
