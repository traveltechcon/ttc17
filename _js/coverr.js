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

  if (screen.width > 640) {
    $video.removeAttr('loop');

    var i = 0;
    var playlist = [
      '1-shibuya',
      '2-concrete-jungle',
      '3-boat-lapse',
      '4-birdcatcher'
    ];

    $video.on('ended', function (e) {
      i++; if (i > 3) { i = 0; }

      $('.app-header').css({
        'backgroundImage': 'url(../videos/' + playlist[i] + '.jpg)'
      });

      $video.find('source[type="video/mp4"]').attr({
        'src': 'videos/' + playlist[i] + '.mp4'
      });
      $video.find('source[type="video/webm"]').attr({
        'src': 'videos/' + playlist[i] + '.webm'
      });

      $video.get(0).load();
      $video.get(0).play();
    });
  }
});
