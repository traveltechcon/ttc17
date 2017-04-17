$(function() {
  var $container = $('#video-background');
  var $video = $container.find('video');

  $(window).on('resize', scaleVideoContainer);
  scaleVideoContainer();

  function scaleVideoContainer() {
    var container = {
      'width': $container.width(),
      'height': $container.height(),
    };
    container.r = container.width / container.height;

    var originalVideo = {
      'width': 1920,
      'height': 1080
    };
    originalVideo.r = originalVideo.width / originalVideo.height;

    var newVideoDimensions = {
      'width': originalVideo.r > container.r ? container.height * originalVideo.r : container.width,
      'height': originalVideo.r > container.r ? container.height : container.width / originalVideo.r
    };
    newVideoDimensions.marginTop = originalVideo.r > container.r ? 0 : -(newVideoDimensions.height - container.height) / 2;
    newVideoDimensions.marginLeft = originalVideo.r > container.r ?  -(newVideoDimensions.width - container.width) / 2 : 0;

    $video.css(newVideoDimensions);
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
      i++; if (i > playlist.length - 1) { i = 0; }

      $container.css({
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
