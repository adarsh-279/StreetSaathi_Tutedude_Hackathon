import React from "react";
import Routing from "../utils/Routing";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to StreetSathi 🚀
      </h1>
      <p className="text-lg text-gray-300 text-center max-w-xl mb-6">
        Your dashboard for location-driven solutions, smart inventory
        management, and real-time notifications. Explore modules and manage
        everything with ease.
      </p>
      <div className="w-full max-w-4xl">
        <Routing />
      </div>
    </div>
  );
};

export default Home;
