import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          StreetSathi
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>
          <Link to="/inventory" className="hover:text-blue-200">
            Inventory
          </Link>
          <Link to="/orders" className="hover:text-blue-200">
            Orders
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
