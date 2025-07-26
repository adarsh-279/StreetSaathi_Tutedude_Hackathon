import React from "react";

const VendorProfile = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Vendor Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold">Profile Information</h2>
        {/* Add vendor information fields here */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Vendor Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Contact Number
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        {/* Add more fields as necessary */}
      </div>
    </div>
  );
};

export default VendorProfile;
