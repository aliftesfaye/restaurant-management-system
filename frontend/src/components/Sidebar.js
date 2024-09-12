// Sidebar.js

import React from "react";
import { FaBox, FaCreditCard, FaHome, FaUtensils } from "react-icons/fa"; // Importing icons

const Sidebar = () => {
  return (
    <div className="w-32  text-black h-full fixed top-0 left-0 flex flex-col">
      {/* Top Section for Navbar */}
      <div className="flex items-center justify-center py-5 ">
        <span className="text-2xl font-bold">MyApp</span>
      </div>
      {/* Menu Items */}
      <nav className="flex flex-col items-center py-6 flex-1 space-y-8">
        <a
          href="#"
          className="flex flex-col items-center text-gray-600 hover:text-gray-800"
        >
          <FaHome className="text-3xl mb-2" />
          <span>Home</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center text-gray-600 hover:text-gray-800"
        >
          <FaUtensils className="text-3xl mb-2" />
          <span>Menu</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center text-gray-600 hover:text-gray-800"
        >
          <FaCreditCard className="text-3xl mb-2" />
          <span>Payment</span>
        </a>
        <a
          href="#"
          className="flex flex-col items-center text-gray-600 hover:text-gray-800"
        >
          <FaBox className="text-3xl mb-2" />
          <span>Orders</span>
        </a>
      </nav>
      {/* Version Information */}
      <div className="py-4   text-center text-gray-500 text-sm">
        <span>Version 1.0.0</span>
      </div>
    </div>
  );
};

export default Sidebar;
