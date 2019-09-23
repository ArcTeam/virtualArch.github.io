var marker=''
var circle=''
var map;
var punti;
var sentieri;
var pathTitle = localStorage.lang == 'ita' ? 'Sentieri' : 'Track';
function initMap(){
  $("#map-page").fadeIn('fast')
  map = new L.Map('map', { minZoom: 13 }).setView([46.1220, 11.1876], 13);
  toggleSpin(true)
  //let imageUrl = './map/baseWgs84.png'
  //let imageBounds = [[46.06050, 11.08906], [46.16670, 11.23860]]
  let imageUrl = './map/virtualarch.jpg'
  let imageBounds = [[46.08861, 11.16279], [46.15817, 11.21197]]
  //11.1627957447909996,46.0886127499950007 : 11.2119788220709999,46.1581716751650006
  let base = L.imageOverlay(imageUrl, imageBounds).addTo(map)
  let legend = L.Control.extend({
    options: { position: 'topright'},
    onAdd: function (map) {
      var container = L.DomUtil.create('div', 'legend');
      title = $("<p/>",{class:'p-0 mb-1 border-bottom'}).html("<span id='pathTitle' class='pr-3'>"+pathTitle+"</span>")
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

  let myControl = L.Control.extend({
    options: { position: 'topleft'},
    onAdd: function (map) {
      var container = L.DomUtil.create('div', 'extentControl leaflet-bar leaflet-control leaflet-touch');
      btnHome=$("<a/>",{href:'#'}).appendTo(container);
      $("<i/>",{class:'fas fa-home'}).appendTo(btnHome)
      btnHome.on('click', function () {map.fitBounds(punti.getBounds());});

      btnGeoLoc=$("<a/>",{href:'#',class:'stopLoc'}).appendTo(container);
      $("<i/>",{class:'fas fa-location-arrow'}).appendTo(btnGeoLoc)
      btnGeoLoc.on('click', function () {
        $(this).toggleClass('startLoc stopLoc');
        $(this).find('i').toggleClass('fa-location-arrow fa-stop');
        getLocation(this.className)
      });

      btnOption=$("<a/>",{href:'#',class:'setlangPopOver'}).appendTo(container)
      $("<i/>",{class:'fas fa-cog'}).appendTo(btnOption)
      return container;
    }
  })

  map.addControl(new legend());
  map.addControl(new myControl());

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
      .on('click',function(){ slideTrackInfo(v.properties) });
      $("<i/>",{class:'fas fa-minus fa-lg pr-2'}).css("color",p.color).prependTo(li)
      $("<i/>",{class:'fas fa-info pl-2 float-right'}).appendTo(li)
    })
    sentieri = L.geoJSON(data,{
      style: function(feature) { return {color: feature.properties.color,weight:5} }
    }).addTo(map)
    .on('click',function(e){ slideTrackInfo(e.layer.feature.properties) });
  });

  map.setMaxBounds(map.getBounds());
  map.on('load',toggleSpin(false))
}
