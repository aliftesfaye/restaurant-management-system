// components/RestaurantOrders.js

import React, { useState } from "react";
import { FaMinus, FaPlus, FaTable, FaUsers } from "react-icons/fa"; // Importing icons

const menuItemsData = [
  {
    image: "https://via.placeholder.com/50", // Replace with actual image URL
    name: "Item 1",
    price: "$10.00",
    quantity: 2,
  },
  {
    image: "https://via.placeholder.com/50", // Replace with actual image URL
    name: "Item 2",
    price: "$15.00",
    quantity: 1,
  },
  {
    image: "https://via.placeholder.com/50", // Replace with actual image URL
    name: "Item 3",
    price: "$20.00",
    quantity: 3,
  },
  // Add more items to test scrolling
  {
    image: "https://via.placeholder.com/50", // Replace with actual image URL
    name: "Item 4",
    price: "$25.00",
    quantity: 4,
  },
  {
    image: "https://via.placeholder.com/50", // Replace with actual image URL
    name: "Item 5",
    price: "$30.00",
    quantity: 2,
  },
];

const RestaurantOrders = () => {
  // State to manage menu items
  const [menuItems, setMenuItems] = useState(menuItemsData);

  const handleIncreaseQuantity = (index) => {
    const newMenuItems = [...menuItems];
    newMenuItems[index].quantity += 1;
    setMenuItems(newMenuItems);
  };

  const handleDecreaseQuantity = (index) => {
    const newMenuItems = [...menuItems];
    if (newMenuItems[index].quantity > 1) {
      newMenuItems[index].quantity -= 1;
      setMenuItems(newMenuItems);
    }
  };

  // Helper function to calculate the subtotal, service charge, and total
  const calculateTotals = (items) => {
    const subtotal = items.reduce((acc, item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return acc + price * item.quantity;
    }, 0);
    const serviceCharge = subtotal * 0.1; // 10% service charge
    const total = subtotal + serviceCharge;
    return {
      subtotal: subtotal.toFixed(2),
      serviceCharge: serviceCharge.toFixed(2),
      total: total.toFixed(2),
    };
  };

  const { subtotal, serviceCharge, total } = calculateTotals(menuItems);

  return (
    <div className="bg-white p-6  rounded-lg">
      {/* Container for both sections */}
      <div className="space-y-4">
        {/* Orders Section */}
        <div className="flex items-center justify-between text-xl mb-4">
          <span className="text-2xl uppercase">Order #</span>
          <span className="text-2xl uppercase">12455554</span>
        </div>

        {/* Guests and Table Section */}
        <div className="flex justify-between text-lg mb-4">
          <div className="flex items-center">
            <FaUsers className="text-2xl mr-2" />
            <div>
              <span>Guests:</span> {/* Separate span for "Guests:" */}
              <span className="ml-1">2</span> {/* Separate span for "2" */}
            </div>
          </div>
          <div className="flex items-center">
            <FaTable className="text-2xl mr-2" />
            <div>
              <span>Table:</span> {/* Separate span for "Table:" */}
              <span className="ml-1">1</span> {/* Separate span for "1" */}
            </div>
          </div>
        </div>
      </div>

      {/* Single Dotted Line Below Sections */}
      <div className="border-b border-dotted border-gray-300 mt-4"></div>

      {/* Scrollable Menu Items List */}
      <div className="mt-4 max-h-64 overflow-y-auto scrollbar-hidden">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-2"
          >
            {/* Item Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 object-cover mr-4"
            />
            {/* Item Name and Price */}
            <div className="flex-grow flex flex-col justify-center mx-4">
              <span className="text-lg">{item.name}</span>
              <span className="text-gray-600">{item.price}</span>
            </div>
            {/* Quantity with Plus and Minus */}
            <div className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="text-sm text-gray-600 mb-1">Quantity</div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleDecreaseQuantity(index)}
                    className="p-1 text-gray-400 hover:text-gray-800 mr-2"
                  >
                    <FaMinus className="text-l" />
                  </button>
                  <div className="text-base text-gray-800 ">
                    {item.quantity} {/* Quantity Value */}
                  </div>
                  <button
                    onClick={() => handleIncreaseQuantity(index)}
                    className="p-1 text-gray-400 hover:text-gray-800 ml-2"
                  >
                    <FaPlus className="text-l" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <style jsx>{`
          .scrollbar-hidden::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hidden {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>
      </div>

      {/* Summary Section */}
      <div className="mt-6 p-6 border border-dotted border-gray-300 rounded-lg">
        <div className="flex justify-between text-lg mb-2">
          <span className="text-xs uppercase">Subtotal</span>
          <span className="text-xs">{`$${subtotal}`}</span>
        </div>
        <div className="flex justify-between text-lg mb-2">
          <span className="text-xs uppercase">Service Charge 10%</span>
          <span className="text-xs">{`$${serviceCharge}`}</span>
        </div>
        {/* Dotted Line with Wide Gap */}
        <div className="border-b border-dotted border-gray-300 my-4"></div>
        {/* Total Section */}
        <div className="flex justify-between text-2xl mt-4 mb-4">
          <span className="uppercase">Total</span>
          <span>{`$${total}`}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-red-500 text-white py-3 px-6 rounded-md text-lg hover:bg-red-600 transition duration-300">
            Cancel Order
          </button>
          <button className="bg-green-500 text-white py-3 px-6 rounded-md text-lg hover:bg-green-600 transition duration-300">
            Send Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantOrders;
