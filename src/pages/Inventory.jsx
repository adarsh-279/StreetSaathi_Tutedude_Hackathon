import React, { useState } from "react";
import InventoryCard from "../components/dashboard/InventoryCard";

const Inventory = () => {
  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, name: "Tomatoes", quantity: 50, status: "In Stock" },
    { id: 2, name: "Onions", quantity: 20, status: "Low Stock" },
    { id: 3, name: "Potatoes", quantity: 100, status: "In Stock" },
  ]);

  const handleEdit = (item) => {
    alert(`Editing item: ${item.name}`);
    // You can open a modal or navigate to a form here
  };

  const handleDelete = (id) => {
    const filtered = inventoryItems.filter((item) => item.id !== id);
    setInventoryItems(filtered);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        🧺 Inventory Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inventoryItems.map((item) => (
          <InventoryCard
            key={item.id}
            item={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
