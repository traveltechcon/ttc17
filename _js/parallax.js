$(function() {
  var $block = $('#conference-agenda');

  var parallax = 50;
  $(window).on('scroll resize', function() {
    var relativeBlockPosition = $block.offset().top - $(this).scrollTop();
    var blockHeight = $block.outerHeight();
    var windowHeight = $(this).height();
    var span = windowHeight + blockHeight;

    if (relativeBlockPosition > -blockHeight && relativeBlockPosition < windowHeight) {
      parallax = 100 - Math.round((relativeBlockPosition + blockHeight) / span * 10000) / 100;
    }

    $block.css({
      'backgroundPosition': '50% ' + parallax + '%'
    });
  });
});
