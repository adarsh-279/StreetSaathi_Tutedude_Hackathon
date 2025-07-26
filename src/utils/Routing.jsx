import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard';
import InventoryCard from '../components/dashboard/InventoryCard';
import OrderList from '../components/dashboard/OrderList';
import Profile from '../pages/Profile'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<InventoryCard />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default Routing