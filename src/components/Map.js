import '../App.css';
import React from 'react';
import { MapContainer, TileLayer, useMapEvent, Polygon} from 'react-leaflet'
import features from '../map/map.js'


const countryPolygons=features.map( features=> <Polygon 
  pathOptions={{ color: 'clear' }} 
  positions={(features.geometry.coordinates[0]) } 
  eventHandlers={({
    click: () => {
      console.log(features.properties.name)
    },
  })}

/>);




function Map() {
  
  return (

    <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
    {countryPolygons}
  </MapContainer>
  );
}
  
export default Map;