import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { locations } from '../../База_Даных/locations';

const goldIcon = new L.Icon({
  iconUrl:
    'https://png.pngtree.com/png-vector/20220108/ourmid/pngtree-three-dimensional-metal-texture-gold-coin-icon-png-image_4122362.png', // Замініть на URL вашої іконки
  iconSize: [30, 30],
});

interface Location {
  id: number;
  name: string;
  address: string;
  position: [number, number]; // координати для Marker
}

const InteractiveMap: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer
        center={[48.8566, 2.3522]} // Початкова позиція карти (Paris)
        zoom={6}
        style={{ height: '100%', width: '100%', marginBottom: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
        />
        {locations.map(loc => (
          <Marker
            key={loc.id}
            position={loc.position}
            icon={goldIcon}
            eventHandlers={{
              click: () => {
                setActiveLocation(loc);
              },
            }}
          >
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              {loc.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      {activeLocation && (
        <div style={{ paddingTop: 20 }}>
          <h2>Détails de la localisation active</h2>
          <p>Nom : {activeLocation.name}</p>
          <p>Adresse : {activeLocation.address}</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;
