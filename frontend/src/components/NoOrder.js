// components/RightComponent.js

import React from "react";
import { FaExclamationCircle, FaTable, FaUsers } from "react-icons/fa"; // Importing icons

const NoOrder = () => {
  return (
    <div className="bg-white p-6  rounded-lg">
      {/* Orders Section */}

      {/* Orders Section */}
      <div className="flex items-center justify-between text-xl mb-4">
        <span className="text-2xl uppercase">Order #</span>
        {/* <span className="text-2xl uppercase">Order Number</span> */}
      </div>

      {/* Guests and Table Section */}
      <div className="flex justify-between text-lg mb-4">
        <div className="flex items-center">
          <FaUsers className="text-2xl mr-2" />
          <div>
            <span>Guests:</span> {/* Separate span for "Guests:" */}
            <span className="ml-1"></span> {/* Separate span for "2" */}
          </div>
        </div>
        <div className="flex items-center">
          <FaTable className="text-2xl mr-2" />
          <div>
            <span>Table:</span> {/* Separate span for "Table:" */}
            <span className="ml-1"></span> {/* Separate span for "1" */}
          </div>
        </div>
      </div>

      {/* Single Dotted Line Below Sections */}
      <div className="border-b border-dotted border-gray-300 mt-4 mb-4"></div>

      {/* Content will be filled by RestaurantOrders */}

      <div className="flex flex-col items-center justify-center h-full text-center">
        <FaExclamationCircle className="text-6xl text-gray-400 mb-4" />
        <span className="text-xl font-semibold uppercase">
          No Products at the Moment
        </span>
      </div>
    </div>
  );
};

export default NoOrder;
