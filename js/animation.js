//On scroll, stats animate in
$(function() {
  var locationAnimation = $('scale-up-animation');
  var cssClass = 'alternate';
  var yPos;
  var clientsScrollPosition = [];

  function yScroll(){
    yPos = window.pageYOffset;

    if (yPos > 700) {
      locationAnimation.addClass(cssClass);
    }
  }

  function unlockScroll(){
    var html = jQuery('html');
    html.css('overflow', html.data('previous-overflow'));

    window.scrollTo(clientsScrollPosition[0], clientsScrollPosition[1]);
  }

  function lockScroll(){
    var html = jQuery('html');

    clientsScrollPosition = [
      window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
      window.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];

    html.data('previous-overflow', html.css('overflow'));
    html.css('overflow', 'hidden');

    window.scrollTo(clientsScrollPosition[0], clientsScrollPosition[1]);

    $('body').one('click', unlockScroll);
  }

  $(document).on('close.reveal', '[data-reveal]', unlockScroll);
  $(document).on('open.reveal', '[data-reveal]', function(){
    lockScroll();
  });
  $(window).bind('scroll', yScroll);
});


// $(window).scroll(function () {
//     $('.animation-test').each(function () {
//         var imagePos = $(this).offset().top;
//         var imageHeight = $(this).height();
//         var topOfWindow = $(window).scrollTop();

//         if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
//             $(this).addClass("scale-up-animation");
//         } else {
//             $(this).removeClass("scale-up-animation");
//         }
//     });
// });
