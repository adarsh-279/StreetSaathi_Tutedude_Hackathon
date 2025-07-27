import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard';
import Inventory from '../pages/Inventory';
import OrderList from '../components/dashboard/OrderList';
import Profile from '../pages/Profile'
import DashboardPage from '../components/dashboard/DashboardPage'
import UsersList from '../components/dashboard/UsersList';
import RevenuePage from '../components/dashboard/RevenuePage';
import DelhiveryPage from '../components/dashboard/DelhiveryPage';

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/orders" element={<OrderList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/revenue" element={<RevenuePage />} />
        <Route path="/delhivery" element={<DelhiveryPage />} />
      </Routes>
    </>
  );
}

export default Routing