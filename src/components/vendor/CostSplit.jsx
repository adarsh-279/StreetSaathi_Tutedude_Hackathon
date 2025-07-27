import React from "react";

const mockVendors = [
  {
    id: 1,
    name: "Vendor A",
    location: "Ballygunge",
    purchaseType: "Vegetables",
    orderAmount: 3000,
  },
  {
    id: 2,
    name: "Vendor B",
    location: "Ballygunge",
    purchaseType: "Vegetables",
    orderAmount: 2000,
  },
  {
    id: 3,
    name: "Vendor C",
    location: "Park Street",
    purchaseType: "Grains",
    orderAmount: 4000,
  },
  {
    id: 4,
    name: "Vendor D",
    location: "Park Street",
    purchaseType: "Grains",
    orderAmount: 3500,
  },
  {
    id: 5,
    name: "Vendor E",
    location: "Salt Lake",
    purchaseType: "Spices",
    orderAmount: 1800,
  },
  {
    id: 6,
    name: "Vendor F",
    location: "Salt Lake",
    purchaseType: "Spices",
    orderAmount: 2200,
  },
  {
    id: 7,
    name: "Vendor G",
    location: "Ballygunge",
    purchaseType: "Vegetables",
    orderAmount: 2800,
  },
  {
    id: 8,
    name: "Vendor H",
    location: "Park Street",
    purchaseType: "Grains",
    orderAmount: 1500,
  },
  {
    id: 9,
    name: "Vendor I",
    location: "Howrah",
    purchaseType: "Dairy",
    orderAmount: 2700,
  },
  {
    id: 10,
    name: "Vendor J",
    location: "Howrah",
    purchaseType: "Dairy",
    orderAmount: 2300,
  },
];

const groupVendorsByLocationAndType = (vendors) => {
  const groups = {};
  vendors.forEach((v) => {
    const key = `${v.location}-${v.purchaseType}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(v);
  });
  return groups;
};

const CostSplit = () => {
  const grouped = groupVendorsByLocationAndType(mockVendors);

  return (
    <div className="min-h-screen w-full px-6 py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <h2 className="text-5xl font-extrabold text-center mb-6 tracking-tight">
        💰 Cost Splitting
      </h2>
      <p className="text-center text-gray-300 mb-10 max-w-xl mx-auto">
        Group vendors by location and purchase type to calculate fair share
        contributions for bulk orders.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(grouped).map(([key, vendors]) => {
          const total = vendors.reduce((sum, v) => sum + v.orderAmount, 0);
          const perVendor = (total / vendors.length).toFixed(2);
          const [location, type] = key.split("-");

          return (
            <div
              key={key}
              className="bg-white rounded-xl shadow-md p-6 text-gray-900 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-bold">{location}</h3>
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                  {type}
                </span>
              </div>
              <div className="mb-2 text-sm">
                <p>
                  <strong>Total:</strong> ₹{total}
                </p>
                <p>
                  <strong>Average Per Vendor:</strong> ₹{perVendor}
                </p>
              </div>
              <ul className="mt-3 space-y-1 text-sm">
                {vendors.map((v) => (
                  <li key={v.id} className="flex justify-between items-center">
                    <span>{v.name}</span>
                    <span className="text-gray-600">₹{v.orderAmount}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CostSplit;
