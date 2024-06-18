import React from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker } from 'react-leaflet';

const MapSection = ({ summary, map }) => (
  <div>
    <p>{summary}</p>
    {map}
  </div>
);

export default MapSection;