import React from "react";

const TrackingCard = ({ delivery }) => {
  if (!delivery) return null;

  const { id, status, eta, location } = delivery;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-semibold">Delivery Status</h2>
      <p className="mt-2">Delivery ID: {id}</p>
      <p>Status: {status}</p>
      <p>ETA: {eta}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default TrackingCard;
