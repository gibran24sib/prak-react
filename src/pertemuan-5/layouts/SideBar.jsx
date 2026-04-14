import { useState } from "react";
import { FiHome, FiShoppingCart, FiUsers, FiPlus } from "react-icons/fi";

export default function SideBar() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const menuItems = [
    { id: "Dashboard", name: "Dashboard", icon: <FiHome /> },
    { id: "Orders", name: "Orders", icon: <FiShoppingCart /> },
    { id: "Customers", name: "Customers", icon: <FiUsers /> },
  ];

  return (
    <div className="flex min-h-screen w-72 flex-col bg-white border-r border-gray-100 px-6 py-8">
      
      {/* LOGO */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          Sedap<span className="text-green-500">.</span>
        </h1>
        <p className="text-xs text-gray-400 mt-1 tracking-widest uppercase">
          Admin Dashboard
        </p>
      </div>

      {/* MENU */}
      <ul className="space-y-2 flex-1">
        {menuItems.map((item) => (
          <li key={item.id}>
            <div
              onClick={() => setActiveMenu(item.id)}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
                transition-all duration-300 group
                ${
                  activeMenu === item.id
                    ? "bg-green-50 text-green-600 shadow-sm border-l-4 border-green-500"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                }
              `}
            >
              {/* ICON */}
              <span
                className={`
                  text-lg transition-all duration-300
                  ${
                    activeMenu === item.id
                      ? "text-green-500 scale-110"
                      : "text-gray-400 group-hover:scale-110"
                  }
                `}
              >
                {item.icon}
              </span>

              {/* TEXT */}
              <span className="text-sm font-medium tracking-wide">
                {item.name}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* FOOTER CARD (MINIMAL) */}
      <div className="mt-6">
        <div className="bg-green-500 text-white p-5 rounded-2xl shadow-md">
          <p className="text-xs opacity-90 mb-4">
            Manage your menu easily with one click
          </p>

          <button className="w-full flex items-center justify-center gap-2 bg-white text-green-600 py-2 rounded-lg font-semibold text-xs hover:bg-gray-100 transition">
            <FiPlus /> Add Menu
          </button>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-6 text-xs text-gray-400">
          <p className="font-semibold text-gray-700">Sedap Admin</p>
          <p className="mt-1">© 2026 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}