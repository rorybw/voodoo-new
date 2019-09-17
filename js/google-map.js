
var marker;

function initMap() {

  var myLatLng = {lat: 51.500513, lng: -0.113458};

  var map = new google.maps.Map(
      document.getElementById('map'), {
          zoom: 16,
          center: myLatLng});
    
    
    var image = 'images/MapIcon.png';

    /*var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
    });*/
 
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: 'images/MapIcon6.png',
      title: 'Voodoo Chicken & Spice'});
    
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h2 id="firstHeading" class="firstHeading MPINo508">Voodoo Chicken & Spice</h2>'+
      '<div id="bodyContent">'+
      '<p><b>Lower Marsh, Waterloo, London, SE1 7AE</b><br>' +
      'Tuesday - Friday, 11:30 - 14:30</p>'+
      '<p><a href="https://goo.gl/maps/ZzSRmz3Z6YUeWbG3A" target="_blank">'+
      '<b><u>Directions</u></b></a> '+
      '</p>'+
      '</div>'+
      '</div>';
    
        var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
      });
    
    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
    
    }