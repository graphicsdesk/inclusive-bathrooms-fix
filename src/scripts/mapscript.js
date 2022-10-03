import mapboxgl from 'mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoibWVocmthdXIiLCJhIjoiY2t6dDByODA4MTlhdTJ3cngydm1sYm0zOCJ9.JR0bZW31NCyKJJUd9QqH0A';
const map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mehrkaur/cl8b2lmp4000215rty9e6kz1d', // replace this with your style URL
center: [-73.9615, 40.8082],
zoom: 15.5
});

/* 
Add an event listener that runs
when a user clicks on the map element.
*/
map.on('click', (event) => {
// If the user clicked on one of your markers, get its information.
const features = map.queryRenderedFeatures(event.point, {
    layers: ['gender-neutral-bathrooms'] // replace with your layer name
});
if (!features.length) {
    return;
}
const feature = features[0];

/* 
Create a popup, specify its options 
and properties, and add it to the map.
*/
const popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
        `<p class="popup" style="font-weight:bold;">${feature.properties.title}</p><p class="popup">${feature.properties.floor}</p>`
    )
    .addTo(map);
});

