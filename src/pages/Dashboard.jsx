import React from "react";
import Sidebar from "../components/common/Sidebar"
import Stats from "../components/dashboard/Stats"
import InventoryCard from "../components/dashboard/InventoryCard"
import OrderList from "../components/dashboard/Orderlist"

const Dashboard = () => {
  return (
    <div className="flex w-full h-screen bg-gray-800 text-white">
      <Sidebar />
      <div className="flex-1 p-4 w-full min-h-screen bg-gray-800">
        <h1 className="text-2xl font-bold mb-4">Vendor Dashboard</h1>
        <Stats />
        <InventoryCard />
        <OrderList />
      </div>
    </div>
  );
};

export default Dashboard;
