map = new L.Map('map').setView([51.505, -0.09], 13);
osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
osm = new L.TileLayer(osmUrl, {minZoom: 5, attribution: osmAttrib}).addTo(map);
