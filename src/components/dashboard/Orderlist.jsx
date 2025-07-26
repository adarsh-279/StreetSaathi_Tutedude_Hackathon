import React from "react";

const OrderList = ({ orders = [] }) => {
  // If no orders at all, show fallback message
  if (!orders.length) {
    return (
      <div className="order-list text-gray-500 italic">
        <h2 className="text-xl font-bold mb-4">Orders</h2>
        <p>No orders available right now.</p>
      </div>
    );
  }

  return (
    <div className="order-list">
      <h2 className="text-xl font-bold mb-4">Orders</h2>
      <ul className="space-y-4">
        {orders.map((order) => (
          <li
            key={order?.id ?? Math.random()}
            className="border p-4 rounded shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-indigo-600">
              Order ID: {order.id}
            </h3>
            <p className="text-gray-700">Status: {order.status}</p>
            <p className="text-gray-700">
              Items:
              {Array.isArray(order.items) ? order.items.join(", ") : "N/A"}
            </p>
            <p className="text-gray-700">Total: ₹{order.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
