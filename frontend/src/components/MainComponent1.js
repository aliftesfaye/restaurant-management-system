import React, { useState } from "react";
import { FaChair, FaMinus, FaPlus, FaUser } from "react-icons/fa"; // Import plus and minus icons

const tables = [
  { id: 1, name: "Table 1", link: "/table/1" },
  { id: 2, name: "Table 2", link: "/table/2" },
  { id: 3, name: "Table 3", link: "/table/3" },
  { id: 4, name: "Table 4", link: "/table/4" },
  { id: 5, name: "Table 5", link: "/table/5" },
  { id: 6, name: "Table 6", link: "/table/6" },
  { id: 7, name: "Table 7", link: "/table/7" },
  { id: 8, name: "Table 8", link: "/table/8" },
  { id: 9, name: "Table 9", link: "/table/9" },
  { id: 10, name: "Table 10", link: "/table/10" },
  { id: 11, name: "Table 11", link: "/table/11" },
  { id: 12, name: "Table 12", link: "/table/12" },
  { id: 13, name: "Table 13", link: "/table/13" },
  { id: 14, name: "Table 14", link: "/table/14" },
];

const MainComponent1 = () => {
  const [guestCount, setGuestCount] = useState(1);

  const increaseGuests = () => setGuestCount((prev) => prev + 1);
  const decreaseGuests = () =>
    setGuestCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="p-6 flex-1 ">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">TABLE LIST</h1>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                First Floor
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Second Floor
              </button>
            </div>
          </div>
          <div className="border-t border-dotted border-gray-400 mb-6"></div>
        </div>

        {/* Table Cards Section */}
        <div className="h-96 overflow-y-auto scrollbar-hidden">
          <div className="flex flex-wrap justify-around">
            {tables.map((table) => (
              <a
                key={table.id}
                href={table.link}
                className="bg-white p-6 rounded-lg m-2 w-60 flex flex-col items-center text-center no-underline transition-transform transform hover:scale-105 border border-gray-300"
              >
                <img
                  src="/chair.png"
                  alt="Table with Chairs"
                  className="text-gray-500 mb-3 text-4xl"
                />
                <p className="text-lg font-semibold">{table.name}</p>
              </a>
            ))}
          </div>
        </div>
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

      {/* Footer Section */}
      <div className="border-t border-dashed border-gray-400 bg-white px-6 py-1 flex items-center justify-between">
        <div className="flex items-center space-x-4 mt-3">
          <div className="flex items-center space-x-2">
            <FaChair className="text-gray-500 text-xl" />
            <span className="text-sm">TABLE:</span>
            <span className="ml-2 text-lg">1</span>{" "}
            {/* Replace with dynamic value if needed */}
          </div>
          <div className="flex items-center space-x-2">
            <FaUser className="text-gray-500 text-xl" />
            <span className=" text-sm">GUEST:</span>
            <div className="flex items-center space-x-2 ml-2">
              <button
                onClick={decreaseGuests}
                className="bg-gray-200 p-1 rounded-full hover:bg-gray-300 focus:outline-none"
              >
                <FaMinus className="text-gray-600" />
              </button>
              <span className="text-sm">{guestCount}</span>
              <button
                onClick={increaseGuests}
                className="bg-gray-200 p-1 rounded-full hover:bg-gray-300 focus:outline-none"
              >
                <FaPlus className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
        <button className="bg-green-500 text-white py-3 px-16 mt-3 rounded-lg text-lg font-bold">
          Continue
        </button>
      </div>
    </div>
  );
};

export default MainComponent1;
