import '../App.css';
import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

function Map() {
  
  return (
    <MapContainer center={[35, -95]} zoom={3} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    </MapContainer>
  );
}
  
export default Map;