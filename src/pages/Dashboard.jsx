import React from "react";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import InventoryCard from "../components/dashboard/InventoryCard";
import OrderList from "../components/dashboard/OrderList";
import Stats from "../components/dashboard/Stats";

const Dashboard = () => {
  return (
    <div className="flex">
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
