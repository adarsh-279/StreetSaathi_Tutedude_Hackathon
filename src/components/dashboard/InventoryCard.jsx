import React from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const InventoryCard = ({ item, onEdit, onDelete, onIncrease }) => {
  if (!item) return null;

  // Determine dynamic status color
  const statusColor =
    item.status === "Low Stock"
      ? "bg-red-100 text-red-600"
      : "bg-green-100 text-green-600";

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transition duration-200">
      <div>
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-700 mb-1">Quantity: {item.quantity}</p>
        <span
          className={`px-2 py-1 rounded text-sm font-medium ${statusColor}`}
        >
          {item.status}
        </span>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onIncrease(item.id)}
          className="flex items-center gap-1 px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white text-sm rounded"
        >
          <FaPlus /> Increase
        </button>
        <button
          onClick={() => onEdit(item)}
          className="flex items-center gap-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded"
        >
          <FaEdit /> Edit
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="flex items-center gap-1 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded"
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default InventoryCard;
