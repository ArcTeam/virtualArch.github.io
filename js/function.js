$(document).bind('mobileinit',function(){
  $.mobile.changePage.defaults.changeHash = false;
  $.mobile.hashListeningEnabled = false;
  $.mobile.pushStateEnabled = false;
});

function initMap(){
  map = new L.Map('map').setView([46.1220, 11.1876], 13);
  osmUrl='http://{s}.tile.osm.org/{z}/{x}/{y}.png';
  osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
  osm = new L.TileLayer(osmUrl, {minZoom: 5, attribution: osmAttrib}).addTo(map);
  $.getJSON('json/punti.geojson',function (data) {
    if (!data.features) {
      map.setView(new L.LatLng(46.1220, 11.1876), 13);
    }else {
      punti = L.geoJSON(data, { onEachFeature: bindPopUp });
      map.addLayer(punti);
      map.fitBounds(punti.getBounds());
      // punti.on('click',bindPopUp)
    }
  });
}

function bindPopUp (feature, layer) {
  prop = feature.properties;
  popup="<h5 class='card-title border-bottom'>"+prop.nome+"</h5>";
  popup += "<a href='poi.php?poi="+prop.id+"' title='view complete poi info' class='text-success card-link'>...more info</a>";
  layer.bindPopup(popup)
}
