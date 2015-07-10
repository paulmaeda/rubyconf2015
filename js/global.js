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
