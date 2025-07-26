import React from "react";

const Stats = () => {
  return (
    <div className="stats-container">
      <h2 className="text-xl font-bold">Key Statistics</h2>
      <div className="stats-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="stat-card bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-lg">Total Inventory Items</h3>
          <p className="text-2xl font-semibold">150</p>
        </div>
        <div className="stat-card bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-lg">Total Orders Today</h3>
          <p className="text-2xl font-semibold">25</p>
        </div>
        <div className="stat-card bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-lg">Pending Deliveries</h3>
          <p className="text-2xl font-semibold">5</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
