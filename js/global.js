//
// Menu
//

function menuToggle(){
  var openButton = $('.navigation-toggle');
  var closeButton = $('.navigation-close');
  var menu = $('.main-navigation');
  var openClass = 'open';

  openButton.on('click', function(){
    menu.addClass(openClass);
  });

  closeButton.on('click', function(){
    menu.removeClass(openClass);
  });
}

$(function(){
  menuToggle();
});


//
// Google Maps
//

function initializeMap() {
  var mapCanvas = document.getElementById('map-canvas');
  var myLatLng = new google.maps.LatLng(29.423478, -98.483723);
  var mapOptions = {
    center: new google.maps.LatLng(29.423478, -98.483723),
    zoom: 16,
    disableDefaultUI: false,
    scrollwheel: false,
    navigationControl: false,
    scaleControl: false,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var iconURL = 'img/star-pin.png';
  var markerImage = new google.maps.MarkerImage(
    iconURL,
    new google.maps.Size(140, 158), // size
    new google.maps.Point(0,0), // origin
    new google.maps.Point(35,79), // anchor
    new google.maps.Size(70,79) // scaled size
  );

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: markerImage
  });

  google.maps.event.addListener(marker, 'click', function() {
    window.open('https://www.google.com/maps/place/101+Bowie+St,+Rivercenter+Mall,+San+Antonio,+TX+78205/@29.4232349,-98.4837287,17z/data=!4m7!1m4!3m3!1s0x865cf6003a696d53:0xb05fa6d6b828c135!2s101+Bowie+St,+Rivercenter+Mall,+San+Antonio,+TX+78205!3b1!3m1!1s0x865cf6003a696d53:0xb05fa6d6b828c135');
  });

  window.onresize = function(event) {
    map.panTo(myLatLng);
  };
}

google.maps.event.addDomListener(window, 'load', initializeMap);

//
// Countdown Timer
//

var time = document.getElementsByTagName('time')[0],
    days = document.getElementById('days'),
    hours = document.getElementById('hours'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds');

function getTimeToConference() {
  var currentTime = new Date(),
      confTime = new Date('November 16, 2015 18:00:00'),
      timeToConf = confTime - currentTime,
      daysToConf = Math.floor(timeToConf / 86400000), //86400000 ms in a day
      hoursToConf = Math.floor( (timeToConf % 86400000) / 3600000), //3600000ms in an hour
      minutesToConf = Math.floor( ((timeToConf % 86400000) % 3600000) / 60000 ), //60000 ms in a minute
      secondsToConf = Math.floor( ( ((timeToConf % 86400000) % 3600000) % 60000) / 1000);
  /*time.innerHTML = daysToConf + ' days ' + hoursToConf + ' hours ' + minutesToConf + ' minutes <div>' + secondsToConf + '</div> seconds.';*/
  days.innerHTML = daysToConf;
  hours.innerHTML = hoursToConf;
  minutes.innerHTML = minutesToConf;
  seconds.innerHTML = secondsToConf;

}
window.setInterval(getTimeToConference,1000);

//
// Schedule Navigation
//

// $("#monday-button").click(function(){
//     $("#schedule-sunday").hide(500);
//     $("#schedule-monday").show(500);
// });

// $("#sunday-button").click(function(){
//     $("#schedule-monday").hide(500);
//     $("#schedule-sunday").show(500);
// });

//when clicking on any <a> tag within #schedule-nav
$('#schedule-nav').on('click', 'a', function(e){
  //prevent link from firing
  e.preventDefault();

  //hide all the rest of the content divs
  $('.schedule-data').fadeOut();

  //get data attribute of which <a> is clicked
  var code = $(this).data('code');

  //grab the content div with the class
  //that matches the data-attribute
  $('.' + code).fadeIn();
});



