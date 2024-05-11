const nikeCoords = { lat: -33.1327619, lng: -71.5636687};

let map;
let marker;
let autocomplete;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: nikeCoords,
    zoom: 12,
  });
  marker = new google.maps.Marker({
    position: nikeCoords,
    map: map, 
  });
}