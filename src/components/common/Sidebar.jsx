import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-full p-5 border-r-2 border-[#ffffff10]">
      <Link
        to="/"
        className="text-3xl font-bold mb-4 border-b-2 border-[#ffffff10] text-center pb-4"
      >
        StreetSathi
      </Link>
      <ul className="mt-10">
        <li className="mb-2 text-lg">
          <Link to="/dashboard" className="hover:text-gray-400">
            Dashboard
          </Link>
        </li>
        <li className="mb-2 text-lg">
          <Link to="/inventory" className="hover:text-gray-400">
            Inventory
          </Link>
        </li>
        <li className="mb-2 text-lg">
          <Link to="/orders" className="hover:text-gray-400">
            Orders
          </Link>
        </li>
        <li className="mb-2 text-lg">
          <Link to="/revenue" className="hover:text-gray-400">
            Revenue
          </Link>
        </li>
        <li className="mb-2 text-lg">
          <Link to="/profile" className="hover:text-gray-400">
            Profile
          </Link>
        </li>
        <li className="mb-2 text-lg">
          <Link to="/cost-split" className="hover:text-gray-400">
            Cost Split
          </Link>
        </li>
        <li className="mb-2 text-lg">
          <Link to="/delivery-status" className="hover:text-gray-400">
            Delivery Status
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
