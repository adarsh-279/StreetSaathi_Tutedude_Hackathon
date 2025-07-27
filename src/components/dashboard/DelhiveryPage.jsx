import React, { useState } from "react";
import TrackingCard from "../delivery/TrackingCard";
import MapView from "../delivery/MapView";

const deliveryLocations = [
  {
    id: "DLV-9283",
    lat: 22.5252,
    lng: 88.3647,
    name: "Ballygunge Drop Point",
    status: "Out for delivery",
    eta: "27 July 2025, 3:30 PM",
    location: "Ballygunge, Kolkata",
  },
  {
    id: "DLV-9321",
    lat: 22.5726,
    lng: 88.3639,
    name: "Park Street Hub",
    status: "In transit",
    eta: "27 July 2025, 4:15 PM",
    location: "Park Street, Kolkata",
  },
  {
    id: "DLV-9488",
    lat: 22.4995,
    lng: 88.3713,
    name: "Jadavpur Link",
    status: "Awaiting pickup",
    eta: "27 July 2025, 2:45 PM",
    location: "Jadavpur, Kolkata",
  },
];

const DelhiveryPage = () => {
  const [selectedDelivery, setSelectedDelivery] = useState(
    deliveryLocations[0]
  );

    return (
      <div className="w-full h-screen bg-gray-800 pt-10">
        <div className="bg-gray-800 p-6 space-y-6 max-w-4xl mx-auto border-2 border-[#ffffff40] ">
          <TrackingCard delivery={selectedDelivery} />
          <div className="h-[400px] w-full rounded overflow-hidden shadow ">
            <MapView
              locations={deliveryLocations}
              onSelect={(loc) => setSelectedDelivery(loc)}
              selectedId={selectedDelivery.id}
            />
          </div>
        </div>
      </div>
    );
};

export default DelhiveryPage;
