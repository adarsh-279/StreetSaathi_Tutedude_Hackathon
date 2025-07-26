import React, { useState } from "react";
import InventoryCard from "../components/dashboard/InventoryCard";

const Inventory = () => {
  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, name: "Tomatoes", quantity: 50, status: "In Stock" },
    { id: 2, name: "Onions", quantity: 0, status: "Out of Stock" },
    { id: 3, name: "Potatoes", quantity: 100, status: "In Stock" },
  ]);

  const [newItem, setNewItem] = useState({ name: "", quantity: "" });
  const [editItem, setEditItem] = useState(null);

  const evaluateStatus = (qty) =>
    qty === 0 ? "Out of Stock" : qty < 30 ? "Low Stock" : "In Stock";

  const handleEdit = (item) => {
    setEditItem({ ...item });
  };

  const handleDelete = (id) => {
    setInventoryItems(inventoryItems.filter((item) => item.id !== id));
    if (editItem?.id === id) setEditItem(null);
  };

  const handleIncreaseStock = (id) => {
    const updated = inventoryItems.map((item) => {
      if (item.id === id) {
        const newQty = item.quantity + 10;
        return { ...item, quantity: newQty, status: evaluateStatus(newQty) };
      }
      return item;
    });
    setInventoryItems(updated);
  };

  const handleAddItem = () => {
    if (!newItem.name || !newItem.quantity) return;
    const quantity = Number(newItem.quantity);
    const newProduct = {
      id: Date.now(),
      name: newItem.name,
      quantity,
      status: evaluateStatus(quantity),
    };
    setInventoryItems([...inventoryItems, newProduct]);
    setNewItem({ name: "", quantity: "" });
  };

  const handleSaveEdit = () => {
    const updatedList = inventoryItems.map((item) =>
      item.id === editItem.id
        ? {
            ...editItem,
            quantity: Number(editItem.quantity),
            status: evaluateStatus(editItem.quantity),
          }
        : item
    );
    setInventoryItems(updatedList);
    setEditItem(null);
  };

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        🧺 Inventory Dashboard
      </h1>

      {/* Add Item Form */}
      <div className="bg-white p-4 rounded shadow mb-6 flex gap-4 items-center">
        <input
          type="text"
          placeholder="Product Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="border px-3 py-2 rounded w-1/3"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
          className="border px-3 py-2 rounded w-1/3"
        />
        <button
          onClick={handleAddItem}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          ➕ Add Product
        </button>
      </div>

      {/* Edit Item Form */}
      {editItem && (
        <div className="bg-white p-4 rounded shadow mb-6 flex gap-4 items-center">
          <input
            type="text"
            value={editItem.name}
            onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
            className="border px-3 py-2 rounded w-1/3"
          />
          <input
            type="number"
            value={editItem.quantity}
            onChange={(e) =>
              setEditItem({
                ...editItem,
                quantity: Number(e.target.value),
              })
            }
            className="border px-3 py-2 rounded w-1/3"
          />
          <button
            onClick={handleSaveEdit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            💾 Save Changes
          </button>
          <button
            onClick={() => setEditItem(null)}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
          >
            ❌ Cancel
          </button>
        </div>
      )}

      {/* Inventory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inventoryItems.map((item) => (
          <InventoryCard
            key={item.id}
            item={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onIncrease={handleIncreaseStock}
          />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
