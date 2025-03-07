
var map = L.map('map').setView([0, 0], 2);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);


var cities = [
  { name: "Barcelona", lat: 41.3851, lng: 2.1734 ,email:"SHWRTU"},
  { name: "Marbella", lat: 36.5103, lng: -4.8824 },
  { name: "Munich", lat: 48.1351, lng: 11.5820 },
  { name: "Aachen", lat: 50.7753, lng: 6.0839 },
  { name: "Katowice", lat: 50.2649, lng: 19.0238 },
  { name: "Angelholm", lat: 56.2423, lng: 12.8624 },
  { name: "Halmstad", lat: 56.6741, lng: 12.8568 },
  { name: "Geneva", lat: 46.2044, lng: 6.1432 },
  { name: "Sofia", lat: 42.6977, lng: 23.3219 },
  { name: "Shanghai", lat: 31.2304, lng: 121.4737 },
  { name: "Taipei", lat: 25.0330, lng: 121.5654 },
  { name: "Tokyo", lat: 35.6895, lng: 139.6917 },
  { name: "Hong Kong", lat: 22.3193, lng: 114.1694 },
  { name: "Seoul", lat: 37.5665, lng: 126.9780 },
  { name: "Bangkok", lat: 13.7563, lng: 100.5018 },
  { name: "Kuala Lumpur", lat: 3.1390, lng: 101.6869 },
  { name: "Jakarta", lat: -6.2088, lng: 106.8456 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Melbourne", lat: -37.8136, lng: 144.9631 },
  { name: "Johannesburg", lat: -26.2041, lng: 28.0473 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "Ruwi", lat: 23.5956, lng: 58.4459 },
  { name: "Beirut", lat: 33.8938, lng: 35.5018 },
  { name: "Riyadh", lat: 24.7136, lng: 46.6753 },
  { name: "Beverly Hills", lat: 34.0696, lng: -118.4059 },
  { name: "Newport Beach", lat: 33.6189, lng: -117.9298 },
  { name: "San Francisco", lat: 37.7749, lng: -122.4194 },
  { name: "Denver", lat: 39.7392, lng: -104.9903 },
  { name: "Miami", lat: 25.7617, lng: -80.1918 },
  { name: "Atlanta", lat: 33.7490, lng: -84.3880 },
  { name: "Chicago", lat: 41.8781, lng: -87.6298 },
  { name: "Boston", lat: 42.3601, lng: -71.0589 },
  { name: "Las Vegas", lat: 36.1699, lng: -115.1398 },
  { name: "New York", lat: 40.7128, lng: -74.0060 },
  { name: "Charlotte", lat: 35.2271, lng: -80.8431 },
  { name: "Dallas", lat: 32.7767, lng: -96.7970 },
  { name: "Washington", lat: 38.9072, lng: -77.0379 },
  { name: "Toronto", lat: 43.6510, lng: -79.3470 },
  { name: "Mexico City", lat: 19.4326, lng: -99.1332 },
  { name: "Berkshire", lat: 51.4545, lng: -0.9781 }
];

cities.forEach(function(city) {
    var marker = L.marker([city.lat, city.lng]).addTo(map);
    
    var popupContent = "<strong>Name:</strong> " + city.name + "<br>" +
                       "<strong>Email:</strong> " + city.email + "<br>" +
                       "<strong>Contact:</strong> " + city.contact;
    
    marker.bindPopup(popupContent);
  });
  

