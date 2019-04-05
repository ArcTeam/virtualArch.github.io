element = $('#main');
element.height(element.height() - 42);
map = new L.Map('map').setView([51.505, -0.09], 13);
osmUrl='http://{s}.tile.osm.org/{z}/{x}/{y}.png';
osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
osm = new L.TileLayer(osmUrl, {minZoom: 5, attribution: osmAttrib}).addTo(map);
