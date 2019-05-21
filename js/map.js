function initMap(){
  let punti;
  let sentieri;
  let map = new L.Map('map', { minZoom: 13 }).setView([46.1220, 11.1876], 13);
  let imageUrl = './map/baseWgs84.png'
  let imageBounds = [[46.06050, 11.08906], [46.16670, 11.23860]]
  let base = L.imageOverlay(imageUrl, imageBounds).addTo(map)

  let legend = L.Control.extend({
    options: { position: 'topright'},
    onAdd: function (map) {
      var container = L.DomUtil.create('div', 'legend');
      title = $("<p/>",{class:'p-0 mb-1 border-bottom'}).html("<span class='pr-3'>Sentieri</span>")
      .appendTo(container)
      .on('click', function(){
        list.slideToggle(250)
        $(this).find('i').toggleClass('flip');
      })
      $("<i/>",{class:'fas fa-angle-up fa-lg float-right animation'}).appendTo(title)
      list = $("<ul/>",{id:'sentieri-legend'}).appendTo(container);
      return container;
    }
  })

  let startView = L.Control.extend({
    options: { position: 'topleft'},
    onAdd: function (map) {
      var container = L.DomUtil.create('div', 'extentControl leaflet-bar leaflet-control leaflet-touch');
      btn=$("<a/>",{href:'#'}).appendTo(container);
      $("<i/>",{class:'fas fa-home'}).appendTo(btn)
      btn.on('click', function () {map.fitBounds(punti.getBounds());});
      return container;
    }
  })

  let geoLocBtn = L.Control.extend({
    options: { position: 'topleft'},
    onAdd: function (map) {
      var container = L.DomUtil.create('div', 'extentControl leaflet-bar leaflet-control leaflet-touch');
      btn=$("<a/>",{href:'#'}).appendTo(container);
      $("<i/>",{class:'fas fa-location-arrow'}).appendTo(btn)
      btn.on('click', function () {getLocation()});
      return container;
    }
  })

  map.addControl(new legend());
  map.addControl(new startView());
  map.addControl(new geoLocBtn());

  $.getJSON('json/punti.geojson',function (data) {
    if (!data.features) {
      map.setView(new L.LatLng(46.1220, 11.1876), 13);
    }else {
      punti = L.geoJSON(data).addTo(map).on('click',slidePanel);
      map.fitBounds(punti.getBounds());
    }
  });

  $.getJSON('json/sentieri.geojson',function (data) {
    $.each(data.features, function(i,v){
      p = v.properties
      li = $("<li/>",{text:p.nome+" ("+p.km+" km.)"}).appendTo('#sentieri-legend')
      $("<i/>",{class:'fas fa-minus fa-lg pr-2'}).css("color",p.color).prependTo(li)
    })
    sentieri = L.geoJSON(data,{
      style: function(feature) { return {color: feature.properties.color,weight:5} }
    }).addTo(map).on('click',slideTrackInfo);
  });

  map.setMaxBounds(map.getBounds());
}

function getLocation(){
  map.locate({setView: true, maxZoom: 18, watch:true, timeout: 60000,enableHighAccuracy:true});
  map.on('locationfound', onLocationFound);
}

var marker=''
var circle=''
function onLocationFound(e) {
  var radius = e.accuracy / 2;
  if (marker) {
    map.removeLayer(marker);
    map.removeLayer(circle);
  }
  marker = L.marker(e.latlng).addTo(map);
  circle = L.circle(e.latlng, radius).addTo(map);
}
