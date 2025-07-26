import React from "react";
import Sidebar from "../components/common/Sidebar"
import Navbar from "../components/Navbar"
import Stats from "../components/dashboard/Stats"
import InventoryCard from "../components/dashboard/InventoryCard"
import OrderList from "../components/dashboard/OrderList"

const Dashboard = () => {
  return (
    <div className="flex w-full min-h-screen bg-zinc-900 text-white">
      <Sidebar />
      <div className="flex-1 p-4">
        <Navbar />
        <h1 className="text-2xl font-bold mb-4">Vendor Dashboard</h1>
        <Stats />
        <InventoryCard />
        <OrderList />
      </div>
    </div>
  );
};

export default Dashboard;
