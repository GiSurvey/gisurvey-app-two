import React from 'react';
import { MapContainer, TileLayer, Marker, Popup,  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

const myIcon = new Icon({
    iconUrl: icon,
    iconSize: [20,20]
   })

const LeafletMapMarker = ({ geojsonData }) => {
    return (
      <MapContainer center={[43.90, -78.82]} zoom={11}   style={{ height: '400px' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {geojsonData.features.map((feature, index) => (
  
          <Marker key={index} position={[feature.geometry.coordinates[1], feature.geometry.coordinates[0]]} icon={myIcon} >
            <Popup>
              {feature.properties.NAME}
            </Popup>
          </Marker>
        
        ))}
      </MapContainer>
    );
  }; 

  export default LeafletMapMarker;