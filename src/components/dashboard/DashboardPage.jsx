import React, { useState } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";

const UsersList = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Sweet Bites Bakery",
      email: "sweetbites@localbakery.in",
      businessType: "Bakery & Pastries",
    },
    {
      id: 2,
      name: "Cafe Morning Brew",
      email: "morningbrew@coffeemail.com",
      businessType: "Café & Beverages",
    },
    {
      id: 3,
      name: "FreshMart Grocery",
      email: "freshmart@organicgrocer.net",
      businessType: "Local Grocery",
    },
  ]);

  const [editUser, setEditUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    businessType: "",
  });

  const handleEdit = (user) => setEditUser({ ...user });

  const handleSave = () => {
    setUsers(users.map((u) => (u.id === editUser.id ? editUser : u)));
    setEditUser(null);
  };

  const handleDelete = (user) => {
    if (window.confirm(`Delete ${user.name}?`)) {
      setUsers(users.filter((u) => u.id !== user.id));
    }
  };

  const handleAddUser = () => {
    if (
      newUser.name.trim() &&
      newUser.email.trim() &&
      newUser.businessType.trim()
    ) {
      const newEntry = {
        ...newUser,
        id: Date.now(),
      };
      setUsers([...users, newEntry]);
      setNewUser({ name: "", email: "", businessType: "" });
    }
  };

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">
        🛍️ Verified Vendors
      </h1>

      {/* Add Vendor Form */}
      <div className="bg-white p-4 mb-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center gap-2">
          <FaPlus /> Add New Vendor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border px-3 py-2 rounded"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="border px-3 py-2 rounded"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Business Type"
            className="border px-3 py-2 rounded"
            value={newUser.businessType}
            onChange={(e) =>
              setNewUser({ ...newUser, businessType: e.target.value })
            }
          />
        </div>
        <button
          onClick={handleAddUser}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Vendor
        </button>
      </div>

      {/* Vendor Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-700 text-sm">
            <tr>
              <th className="py-3 px-4 text-left">Vendor Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Specialty</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) =>
              editUser?.id === user.id ? (
                <tr key={user.id} className="border-b bg-yellow-50">
                  <td className="py-3 px-4">
                    <input
                      type="text"
                      value={editUser.name}
                      onChange={(e) =>
                        setEditUser({ ...editUser, name: e.target.value })
                      }
                      className="border px-2 py-1 rounded w-full"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="email"
                      value={editUser.email}
                      onChange={(e) =>
                        setEditUser({ ...editUser, email: e.target.value })
                      }
                      className="border px-2 py-1 rounded w-full"
                    />
                  </td>
                  <td className="py-3 px-4">
                    <input
                      type="text"
                      value={editUser.businessType}
                      onChange={(e) =>
                        setEditUser({
                          ...editUser,
                          businessType: e.target.value,
                        })
                      }
                      className="border px-2 py-1 rounded w-full"
                    />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button
                      className="mr-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                      onClick={() => setEditUser(null)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 flex items-center gap-2">
                    <FaUserCircle className="text-xl text-gray-600" />
                    <span>{user.name}</span>
                  </td>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <FaEnvelope className="text-sm text-gray-500" />
                    <span>{user.email}</span>
                  </td>
                  <td className="py-3 px-4">{user.businessType}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      className="mr-2 text-blue-600 hover:text-blue-800"
                      onClick={() => handleEdit(user)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDelete(user)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
