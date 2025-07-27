import React, { useState, useEffect } from "react";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);

const Orderlist = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders"); // Replace with your actual endpoint
        const data = await response.json();
        setOrders(data.orders || []);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-gray-500 flex items-center justify-center min-h-[300px]">
        <span className="animate-spin text-3xl">⏳</span>
        <p className="ml-3">Loading orders...</p>
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="p-6 text-gray-500 italic flex flex-col items-center justify-center min-h-[300px]">
        <span className="text-4xl mb-2">🛒</span>
        <h2 className="text-xl font-bold mb-2">Orders</h2>
        <p>No orders available right now.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        📦 Recent Orders
      </h2>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {orders.map((order) => {
          const badgeStyle =
            statusColors[order.status?.toLowerCase()] ||
            "bg-gray-100 text-gray-600";

          return (
            <li
              key={order?.id ?? Math.random()}
              className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-200 border border-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-indigo-600">
                  Order #{order.id}
                </h3>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${badgeStyle}`}
                >
                  {order.status}
                </span>
              </div>
              <p className="text-gray-700 mb-1">
                Items:{" "}
                {Array.isArray(order.items) ? order.items.join(", ") : "N/A"}
              </p>
              <p className="text-gray-700 mb-1">
                Total: {formatCurrency(order.total)}
              </p>
              {order.date && (
                <p className="text-sm text-gray-500">Date: {order.date}</p>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Orderlist;
