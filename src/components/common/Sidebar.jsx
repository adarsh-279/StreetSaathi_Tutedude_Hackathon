import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full p-5">
      <h2 className="text-xl font-bold mb-4">StreetSathi</h2>
      <ul>
        <li className="mb-2">
          <Link to="/dashboard" className="hover:text-gray-400">
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/inventory" className="hover:text-gray-400">
            Inventory
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/orders" className="hover:text-gray-400">
            Orders
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/profile" className="hover:text-gray-400">
            Profile
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/cost-split" className="hover:text-gray-400">
            Cost Split
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/delivery-status" className="hover:text-gray-400">
            Delivery Status
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
