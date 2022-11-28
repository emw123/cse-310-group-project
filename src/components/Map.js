import '../App.css';
import React from 'react';
import { MapContainer, TileLayer, useMapEvent} from 'react-leaflet'


//This logs the latitude and longitude in console
function MyComponent() {
  const map = useMapEvent('click', (e) => {
    console.log([e.latlng.lat,e.latlng.lng]);
    
  })

  return null
}


function Map() {
  
  return (

    <MapContainer center={[35, -90]} zoom={3} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <MyComponent />
  </MapContainer>
  );
}
  
export default Map;