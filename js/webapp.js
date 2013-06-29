  function initialize() {
      navigator.geolocation.getCurrentPosition(function(position) {
          console.log(position.coords.latitude + " " + position.coords.longitude);
          plotMap(position.coords.latitude, position.coords.longitude);
          document.getElementById('info').innerHTML = "";
      }, function(position) {
          alert("Failed to get your current location");
      });
  }

  function plotMap(curLat, CurLon) {
      //Google Maps API Code starts here
      var mapProp = {
          center: new google.maps.LatLng(curLat, CurLon),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(curLat, CurLon)
      });
      marker.setMap(map);
      //Google Maps API Code ends here
  }