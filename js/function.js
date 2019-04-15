$(document).bind('mobileinit',function(){
  $.mobile.changePage.defaults.changeHash = false;
  $.mobile.hashListeningEnabled = false;
  $.mobile.pushStateEnabled = false;
});

function initMap(){
  let punti;
  let sentieri;
  map = new L.Map('map', { minZoom: 13 }).setView([46.1220, 11.1876], 13);
  lyr = L.tileLayer('map/basemap/{z}/{x}/{y}.png', {tms: true, opacity: 0.7, attribution: 'base map tiles generated by <a href="http://www.klokan.cz/projects/gdal2tiles/">GDAL2Tiles</a>'}).addTo(map);

  legend = L.Control.extend({
    options: { position: 'topright'},
    onAdd: function (map) {
      var container = L.DomUtil.create('div', 'legend');
      title=$("<p/>",{text:'Sentieri'}).appendTo(container);
      return container;
    }
  })
  startView = L.Control.extend({
    options: { position: 'topleft'},
    onAdd: function (map) {
      var container = L.DomUtil.create('div', 'extentControl leaflet-bar leaflet-control leaflet-touch');
      btn=$("<a/>",{href:'#'}).appendTo(container);
      $("<i/>",{class:'fas fa-home'}).appendTo(btn)
      btn.on('click', function () {map.fitBounds(punti.getBounds());});
      return container;
    }
  })

  map.addControl(new legend());
  map.addControl(new startView());

  $.getJSON('json/punti.geojson',function (data) {
    if (!data.features) {
      map.setView(new L.LatLng(46.1220, 11.1876), 13);
    }else {
      punti = L.geoJSON(data).addTo(map).on('click',slidePanel);
      map.fitBounds(punti.getBounds());
    }
  });

  $.getJSON('json/sentieri.geojson',function (data) {
    sentieri = L.geoJSON(data,{
      style: function(feature) { return {color: feature.properties.color} }
    }).addTo(map);
  });

  map.setMaxBounds(map.getBounds());
}
function slidePanel(e){
  prop = e.layer.feature.properties
  $(".closePanel>h5").html(prop.nome)
  $(".poi-content").html(prop.desc)

  $('#wrapPoiInfo').fadeIn(500)
  $("body").on('click', '.closePanel', function() {
    $('#wrapPoiInfo').fadeOut(500);
  });
}
