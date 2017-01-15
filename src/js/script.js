function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(59.939200,30.321500)
  }
  var image = 'src/img/icon-svg/icon-map-pin.svg';

  var map = new google.maps.Map(document.getElementById('google-map'),
                                mapOptions);
  var myLatLng = new google.maps.LatLng(59.938740,30.323100);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
if (google) {
  google.maps.event.addDomListener(window, 'load', initialize);
}