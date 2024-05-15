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

$(document).ready(function() {
  $('#brand-filter').change(function() {
      var selectedBrand = $(this).val();

      console.log("Marca seleccionada:", selectedBrand);

      $('.card').hide();
      if (selectedBrand === 'all') {
          $('.card').show();
      } else {
          $('.card[data-brand="' + selectedBrand + '"]').show();
      }
  });
});
