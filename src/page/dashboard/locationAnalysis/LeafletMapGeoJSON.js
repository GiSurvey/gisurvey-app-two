import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMapGeoJSON = ({ geojsonData }) => {
    return (
      <MapContainer center={[43.90, -78.82]} zoom={11} style={{ height: '400px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {geojsonData && <GeoJSON data={geojsonData} />}
      </MapContainer>
    );
  };

export default LeafletMapGeoJSON;