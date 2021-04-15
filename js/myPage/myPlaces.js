
// initialize Leaflet
var homeLat=30.7981, homeLng=73.4216, officeLat=31.5096, officeLng= 74.3459, uniLat=31.5704, uniLng=74.3096, uncleLat=31.4504, uncleLng=73.1350, favSweetLat=31.03483, favSweetLong= 73.13640;


var map = L.map("map");

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

map.setView({ lat: 31.2058, lng: 73.9370 }, 9);


var uniMarker = L.marker({ lat: uniLat, lng: uniLng }).addTo(map).bindPopup("<b>University</b><br>Punjab University College of Information Technology, Old Anarkali, Lahore. <br> I have done my graduation in BSIT here.");
var uncleHouseMarker = L.marker({ lat: uncleLat, lng: uncleLng }).addTo(map).bindPopup("<b>Uncle's Home</b><br>I love to visit my uncle's hometown city \"Faisalabad\" in vacations.");
var favSweetsMarker = L.marker({ lat: favSweetLat, lng: favSweetLong }).addTo(map).bindPopup("<b>Mahi Sweets & Bakers</b><br>I love their special sweets. They are located in \"Tandlyanwala\".");
var homeMarker = L.marker({ lat: homeLat, lng: homeLng }).addTo(map).bindPopup("<b>Home</b><br>District Complex, Okara");
var officeMarker = L.marker({ lat: officeLat, lng: officeLng }).addTo(map).bindPopup("<b>Office</b><br>Coeus Solutions GmbH, Liberty, Lahore.<br> I love to work here.").openPopup();
