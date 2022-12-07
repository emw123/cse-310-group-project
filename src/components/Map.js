import '../App.css'
import React from 'react'
import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet'
import map from '../map/map.json'
import { click } from '@testing-library/user-event/dist/click'


function onEachFeature(feature, layer) {
  layer.bindPopup(feature.properties.name)
  layer.on('click', function (e) {
    console.log(feature.properties.name);
  })
}

function Map() {
  return (
    <MapContainer center={[35, -90]} zoom={3} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      noWrap = {true}
    />
    
    <GeoJSON
      data = {map.features}
      style = {{fillOpacity: '0'}}
      onEachFeature={onEachFeature}
      eventHandlers={({
        // click:()=>console.log(map.feature.properties.name)
      })}
    />
  </MapContainer>
  )
}
export default Map;