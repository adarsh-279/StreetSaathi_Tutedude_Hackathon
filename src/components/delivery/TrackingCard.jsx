import React from "react";

const TrackingCard = ({ delivery }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">Delivery Status</h2>
      <p className="mt-2">Delivery ID: {delivery.id}</p>
      <p>Status: {delivery.status}</p>
      <p>ETA: {delivery.eta}</p>
      <p>Location: {delivery.location}</p>
    </div>
  );
};

export default TrackingCard;
