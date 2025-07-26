const InventoryCard = ({ item }) => {
  if (!item) return null; // or a fallback UI

  return (
    <div className="bg-white text-black shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-600">Quantity: {item.quantity}</p>
      <p
        className={`text-sm ${
          item.stockStatus === "low" ? "text-red-500" : "text-green-500"
        }`}
      >
        Stock Status: {item.stockStatus}
      </p>
    </div>
  );
};
export default InventoryCard;