import { useState } from "react";
import {
  FaBell,
  FaSearch,
  FaChevronDown,
  FaUser,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      
      {/* SEARCH */}
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-100 border border-gray-200 rounded-full py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-green-400 focus:bg-white transition"
        />
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-3 ml-4">
        
        {/* ICON BUTTON */}
        <div className="flex items-center gap-2">
          <div className="relative p-2.5 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer transition">
            <FaBell className="text-gray-600 text-sm" />
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] px-1.5 rounded-full">
              5
            </span>
          </div>

          <div className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer transition">
            <FaCog className="text-gray-600 text-sm" />
          </div>
        </div>

        {/* PROFILE */}
        <div className="relative">
          <div
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 cursor-pointer pl-3 border-l border-gray-200"
          >
            <img
              src="https://avatar.iran.liara.run/public/28"
              className="w-9 h-9 rounded-full object-cover"
              alt="avatar"
            />

            <div className="hidden md:block leading-tight">
              <p className="text-sm font-semibold text-gray-800">
                Gibran
              </p>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                Admin
              </p>
            </div>

            <FaChevronDown
              className={`text-gray-400 text-xs transition ${
                isProfileOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* DROPDOWN */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-2 animate-in fade-in zoom-in-95 duration-150">
              
              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition">
                <FaUser className="text-xs" />
                My Profile
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition">
                <FaCog className="text-xs" />
                Settings
              </button>

              <div className="border-t my-1"></div>

              <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition">
                <FaSignOutAlt className="text-xs" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}