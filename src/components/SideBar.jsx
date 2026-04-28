import { FiHome, FiShoppingCart, FiUsers, FiPlus } from "react-icons/fi";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const menuItems = [
    { id: "Dashboard", name: "Dashboard", icon: <FiHome />, to: "/" },
    { id: "Orders", name: "Orders", icon: <FiShoppingCart />, to: "/orders" },
    { id: "Customers", name: "Customers", icon: <FiUsers />, to: "/customers" },
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
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `
                flex items-center gap-3 px-4 py-3 rounded-xl
                transition-all duration-300 group
                ${
                  isActive
                    ? "bg-green-50 text-green-600 shadow-sm border-l-4 border-green-500"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                }
              `
              }
            >
              {/* ICON */}
              <span
                className={({ isActive }) =>
                  `
                  text-lg transition-all duration-300
                  ${
                    isActive
                      ? "text-green-500 scale-110"
                      : "text-gray-400 group-hover:scale-110"
                  }
                `
                }
              >
                {item.icon}
              </span>

              {/* TEXT */}
              <span className="text-sm font-medium tracking-wide">
                {item.name}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* FOOTER */}
      <div className="mt-6">
        <div className="bg-green-500 text-white p-5 rounded-2xl shadow-md">
          <p className="text-xs opacity-90 mb-4">
            Manage your menu easily with one click
          </p>

          <button className="w-full flex items-center justify-center gap-2 bg-white text-green-600 py-2 rounded-lg font-semibold text-xs hover:bg-gray-100 transition">
            <FiPlus /> Add Menu
          </button>
        </div>

        <div className="mt-6 text-xs text-gray-400">
          <p className="font-semibold text-gray-700">Sedap Admin</p>
          <p className="mt-1">© 2026 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}