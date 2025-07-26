import React from "react";
import InventoryCard from "../components/dashboard/InventoryCard";

const Inventory = () => {
  const inventoryItems = [
    { id: 1, name: "Tomatoes", quantity: 50, status: "In Stock" },
    { id: 2, name: "Onions", quantity: 20, status: "Low Stock" },
    { id: 3, name: "Potatoes", quantity: 100, status: "In Stock" },
    // Add more items as needed
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {inventoryItems.map((item) => (
          <InventoryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
