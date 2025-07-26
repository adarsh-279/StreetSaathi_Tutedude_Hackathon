import React from "react";

const OrderList = ({ orders }) => {
  return (
    <div className="order-list">
      <h2 className="text-xl font-bold mb-4">Orders</h2>
      <ul className="space-y-4">
        {orders.map((order) => (
          <li key={order.id} className="border p-4 rounded shadow">
            <h3 className="font-semibold">Order ID: {order.id}</h3>
            <p>Status: {order.status}</p>
            <p>Items: {order.items.join(", ")}</p>
            <p>Total: ${order.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
