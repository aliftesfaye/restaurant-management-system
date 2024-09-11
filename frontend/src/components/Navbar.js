// Navbar.js

import { format } from "date-fns"; // For formatting date/time
import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaPlus, FaSearch } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState("User");

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update date/time every second

    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
      {/* Left Section (Title and Search Bar) */}
      <div className="flex items-center space-x-6">
        {/* Title */}
        {/* <div className="text-3xl font-bold">MyApp</div> */}

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 w-64 md:w-80 lg:w-96"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Centered Section (Date/Time and Username) */}
      <div className="hidden md:flex items-center space-x-6 text-lg">
        <div className="flex items-center space-x-2">
          <FaCalendarAlt className="text-xl" />
          <span>{format(dateTime, "MMMM d, yyyy HH:mm:ss")}</span>
        </div>
        <span className="font-semibold">{username}</span>
      </div>

      {/* Buttons (Right Side) */}
      <div className="flex items-center space-x-4">
        {/* Add Table Button */}
        <button className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <div className="flex items-center justify-center w-6 h-6 border-2 border-white rounded-full">
            <FaPlus className="text-l" />
          </div>
          <span className="ml-2 text-lg">Add Table</span>
        </button>

        {/* Add Menu Button */}
        <button className="flex items-center px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <div className="flex items-center justify-center w-6 h-6 border-2 border-white rounded-full">
            <FaPlus className="text-l" />
          </div>
          <span className="ml-2 text-lg">Add Menu</span>
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center px-3 py-2 border rounded text-white border-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 right-0 w-64 bg-gray-800 text-white p-4 space-y-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center space-x-2 text-lg">
          <FaCalendarAlt className="text-xl" />
          <span>{format(dateTime, "MMMM d, yyyy HH:mm:ss")}</span>
        </div>
        <span className="text-lg font-semibold">{username}</span>
      </div>
    </nav>
  );
};

export default Navbar;
