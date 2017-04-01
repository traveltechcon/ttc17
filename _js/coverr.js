$(function() {
  var $container = $('.video-background');
  var $video = $container.find('video');

  $(window).on('resize', scaleVideoContainer);
  scaleVideoContainer();

  function scaleVideoContainer() {
    var containerWidth = $container.width(),
      containerHeight = $container.height(),
      containerAspectRatio = containerWidth / containerHeight;

    var videoWidth = $video.width(),
      videoHeight = $video.height(),
      videoAspectRatio = videoWidth / videoHeight;

    console.log(containerAspectRatio >= videoAspectRatio);
    console.log(containerHeight, videoAspectRatio, containerHeight * videoAspectRatio);

    if (containerAspectRatio >= videoAspectRatio) {
      $video.css({
        'width': containerWidth,
        'height': containerWidth / videoAspectRatio,
        'marginLeft': 0,
        'marginTop': -(containerWidth / videoAspectRatio - videoHeight) / 2
      });
    } else {
      $video.css({
        'height': containerHeight,
        'width': containerHeight * videoAspectRatio,
        'marginTop': 0,
        'marginLeft': -(containerHeight * videoAspectRatio - videoWidth) / 2
      });
    }
  }
});
