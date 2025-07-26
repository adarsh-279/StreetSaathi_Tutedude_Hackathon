import React from "react";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to StreetSathi</h1>
      <p className="text-lg mb-8">
        Your one-stop solution for managing street food vendor operations.
      </p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Get Started
      </button>
    </div>
  );
};

export default Landing;
