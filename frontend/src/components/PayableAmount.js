import React, { useState } from "react";
import { FaCashRegister, FaCreditCard, FaTicketAlt } from "react-icons/fa"; // Importing new icon

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

const PayableAmount = () => {
  const [menuItems] = useState(menuItemsData);
  const [cashReceived, setCashReceived] = useState(0);

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

  // Calculate return amount
  const returnAmount = Math.max(cashReceived - total, 0).toFixed(2);

  return (
    <div className="bg-white p-6  rounded-lg">
      {/* Payable Amount Section */}
      <div className="text-2xl uppercase mb-4">
        Payable Amount: <span className="text-3xl">${total}</span>
      </div>

      {/* Dotted Line */}
      <div className="border-b border-dotted border-gray-300 mb-4"></div>

      {/* Payment Method Buttons */}
      <div className="flex justify-between mb-4">
        <button className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
          <FaCashRegister className="text-3xl mb-2" />
          <span className="uppercase">Cash</span>
        </button>
        <button className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
          <FaCreditCard className="text-3xl mb-2" />
          <span className="uppercase">Card</span>
        </button>
        <button className="flex flex-col items-center bg-gray-100 p-4 rounded-lg">
          <FaTicketAlt className="text-3xl mb-2" />
          <span className="uppercase">Voucher</span>
        </button>
      </div>

      {/* Dotted Line for Cash Received Section */}
      <div className="border-b border-dotted border-gray-300 mb-4"></div>

      {/* Add Cash Received Section */}
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-4">
        <span className="text-lg uppercase">Add Cash Received:</span>
        <input
          type="number"
          value={cashReceived}
          onChange={(e) => setCashReceived(parseFloat(e.target.value) || 0)}
          className="border-b border-gray-300 bg-transparent text-lg text-right px-2 py-1 w-32"
        />
      </div>

      {/* Summary Section */}
      <div className="p-4 border border-dotted border-gray-300 rounded-lg">
        <div className="flex justify-between text-lg mb-2">
          <span className="text-lg uppercase">Subtotal</span>
          <span className="text-lg">{`$${subtotal}`}</span>
        </div>
        <div className="flex justify-between text-lg mb-2">
          <span className="text-lg uppercase">Service Charge 10%</span>
          <span className="text-lg">{`$${serviceCharge}`}</span>
        </div>
        {/* Dotted Line with Wide Gap */}
        <div className="border-b border-dotted border-gray-300 my-4"></div>
        {/* Total Section */}
        <div className="flex justify-between text-2xl mt-4 mb-4">
          <span className="uppercase">Total</span>
          <span>{`$${total}`}</span>
        </div>
        {/* Return Section */}
        <div className="flex justify-between text-lg mb-4">
          <span className="text-lg uppercase">Return</span>
          <span className="text-lg">{`$${returnAmount}`}</span>{" "}
          {/* Updated to include Cash Received */}
        </div>
        {/* Pay Now Button */}
        <button className="bg-blue-500 text-white py-4 px-8 rounded-lg w-full text-lg font-bold hover:bg-blue-600 transition duration-300">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PayableAmount;
