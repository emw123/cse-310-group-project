import { MapContainer, TileLayer, Polygon } from 'react-leaflet'
import features from '../map/map.js'

export default function Map(props) {
  const countryPolygons=features.map( features=>
    <Polygon 
      pathOptions={{ color: 'clear' }} 
      positions={(features.geometry.coordinates[0]) } 
      eventHandlers={({mouseover: () => {props.setCountry(features.properties.name)}})}
    />)

  return (
    <MapContainer center={[35, -90]} zoom={3} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {countryPolygons}
    </MapContainer>
  )
}