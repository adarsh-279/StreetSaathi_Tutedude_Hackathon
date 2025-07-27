import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MdLocationOn, MdLocalShipping } from "react-icons/md";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// Custom default icon
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const MapView = ({ locations = [], onSelect, selectedId }) => {
  const defaultCenter = locations.length
    ? [locations[0].lat, locations[0].lng]
    : [20.5937, 78.9629]; // Center of India

  return (
    <MapContainer
      center={defaultCenter}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]}>
          <Popup>
            <div
              className={`cursor-pointer text-gray-700 space-y-1`}
              onClick={() => onSelect && onSelect(loc)}
            >
              <div className="flex items-center gap-2">
                <MdLocationOn className="text-red-500" />
                <span>{loc.name}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MdLocalShipping />
                {selectedId === loc.id ? "Selected" : "Click to view details"}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
