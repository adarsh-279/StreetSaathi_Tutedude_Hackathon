import React from "react";
import { FaBoxes, FaUsers, FaChartBar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const cards = [
    {
      icon: <FaBoxes size={24} />,
      title: "Inventory",
      value: "24 Products",
      bg: "bg-purple-100 text-purple-800",
      route: "/inventory",
    },
    {
      icon: <FaUsers size={24} />,
      title: "Users",
      value: "134 Registered",
      bg: "bg-green-100 text-green-800",
      route: "/users", // <-- Add your Users list route here
    },
    {
      icon: <FaChartBar size={24} />,
      title: "Sales",
      value: "₹1.2L This Month",
      bg: "bg-blue-100 text-blue-800",
      route: "/revenue", // <-- Add your Revenue details page route here
    },
  ];

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-white text-center">
        📊 Dashboard Overview
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const CardContent = (
            <div className="flex items-center gap-3">
              {card.icon}
              <div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm">{card.value}</p>
              </div>
            </div>
          );

          return (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${card.bg} transition-transform hover:scale-[1.03]`}
            >
              {card.route ? (
                <Link to={card.route} className="block w-full">
                  {CardContent}
                </Link>
              ) : (
                CardContent
              )}
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="mt-12 bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Recent Activity
        </h2>
        <ul className="space-y-2 text-gray-600">
          <li>✅ 12 items restocked</li>
          <li>👤 New user registered: scs@fvdss</li>
          <li>🛒 Order #4312 completed</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
