import React, { useState } from "react";

const RevenueDashboard = () => {
  const [revenueData, setRevenueData] = useState([
    {
      id: 1,
      name: "Sweet Bites Bakery",
      revenue: 47250,
      lastUpdated: "2025-07-26",
    },
    {
      id: 2,
      name: "Cafe Morning Brew",
      revenue: 32890,
      lastUpdated: "2025-07-25",
    },
    {
      id: 3,
      name: "FreshMart Grocery",
      revenue: 68210,
      lastUpdated: "2025-07-26",
    },
  ]);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(value);

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        📊 Vendor Revenue Dashboard
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-700 text-sm">
            <tr>
              <th className="py-3 px-4 text-left">Vendor Name</th>
              <th className="py-3 px-4 text-left">Total Revenue</th>
              <th className="py-3 px-4 text-left">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {revenueData.map((vendor) => (
              <tr key={vendor.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{vendor.name}</td>
                <td className="py-3 px-4 font-semibold text-green-600">
                  {formatCurrency(vendor.revenue)}
                </td>
                <td className="py-3 px-4">{vendor.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RevenueDashboard;
