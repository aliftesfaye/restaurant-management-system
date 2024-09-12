import React, { useState } from "react";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa"; // Import additional icons

// Sample menu items with categories and prices
const menuItems = [
  // Existing items
  {
    id: 1,
    name: "Caesar Salad",
    category: "Starter",
    price: "$8",
    image: "/path/to/caesar-salad.jpg",
  },
  {
    id: 2,
    name: "Bruschetta",
    category: "Starter",
    price: "$7",
    image: "/path/to/bruschetta.jpg",
  },
  {
    id: 3,
    name: "Grilled Chicken",
    category: "Main Course",
    price: "$15",
    image: "/path/to/grilled-chicken.jpg",
  },
  {
    id: 4,
    name: "Spaghetti Bolognese",
    category: "Main Course",
    price: "$14",
    image: "/path/to/spaghetti-bolognese.jpg",
  },
  {
    id: 5,
    name: "Chocolate Cake",
    category: "Dessert",
    price: "$6",
    image: "/path/to/chocolate-cake.jpg",
  },
  {
    id: 6,
    name: "Ice Cream",
    category: "Dessert",
    price: "$5",
    image: "/path/to/ice-cream.jpg",
  },
  {
    id: 7,
    name: "Coffee",
    category: "Drink",
    price: "$4",
    image: "/path/to/coffee.jpg",
  },
  {
    id: 8,
    name: "Soda",
    category: "Drink",
    price: "$3",
    image: "/path/to/soda.jpg",
  },
  {
    id: 9,
    name: "Fruit Plate",
    category: "Other",
    price: "$7",
    image: "/path/to/fruit-plate.jpg",
  },

  // Ethiopian menu items
  {
    id: 10,
    name: "Injera",
    category: "Main Course",
    price: "$7",
    image: "/path/to/injera.jpg",
  },
  {
    id: 11,
    name: "Doro Wat",
    category: "Main Course",
    price: "$12",
    image: "/path/to/doro-wat.jpg",
  },
  {
    id: 12,
    name: "Kitfo",
    category: "Main Course",
    price: "$14",
    image: "/path/to/kitfo.jpg",
  },
  {
    id: 13,
    name: "Tibs",
    category: "Main Course",
    price: "$13",
    image: "/path/to/tibs.jpg",
  },
  {
    id: 14,
    name: "Gomen",
    category: "Main Course",
    price: "$8",
    image: "/path/to/gomen.jpg",
  },
  {
    id: 15,
    name: "Tej",
    category: "Drink",
    price: "$5",
    image: "/path/to/tej.jpg",
  },
  {
    id: 16,
    name: "Baklava",
    category: "Dessert",
    price: "$6",
    image: "/path/to/baklava.jpg",
  },

  // New categories items
  {
    id: 17,
    name: "Spring Rolls",
    category: "Appetizers",
    price: "$9",
    image: "/path/to/spring-rolls.jpg",
  },
  {
    id: 18,
    name: "Miso Soup",
    category: "Soups",
    price: "$6",
    image: "/path/to/miso-soup.jpg",
  },
  {
    id: 19,
    name: "Chef’s Special",
    category: "Specials",
    price: "$20",
    image: "/path/to/chefs-special.jpg",
  },
];

const categories = [
  "Starter",
  "Main Course",
  "Drink",
  "Dessert",
  "Other",
  "Appetizers",
  "Soups",
  "Specials",
];

const MainComponent2 = () => {
  const [guestCount, setGuestCount] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedItems, setSelectedItems] = useState(new Set());

  const increaseGuests = () => setGuestCount((prev) => prev + 1);
  const decreaseGuests = () =>
    setGuestCount((prev) => (prev > 0 ? prev - 1 : 0));

  const filteredMenuItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  const toggleSelection = (itemId) => {
    setSelectedItems((prev) => {
      const newSelection = new Set(prev);
      if (newSelection.has(itemId)) {
        newSelection.delete(itemId);
      } else {
        newSelection.add(itemId);
      }
      return newSelection;
    });
  };
  return (
    <div className="p-6 flex-1 ">
      {/* Menu Items Section */}
      <div className="flex-1 p-6">
        {/* Menu Items */}
        <div className="h-96 overflow-y-auto scrollbar-hidden ">
          <div className="h-full flex flex-wrap justify-around">
            {filteredMenuItems.map((item) => (
              <div
                key={item.id}
                className="relative bg-white p-6 rounded-lg m-2 w-60 flex flex-col items-center text-center no-underline transition-transform transform hover:scale-105 border border-gray-300 group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover mb-3"
                />
                <p className="text-lg font-semibold">
                  {item.name.toUpperCase()}
                </p>
                <p className="text-sm text-gray-600">{item.price}</p>
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => toggleSelection(item.id)}
                    className={`py-1 px-3 rounded-full flex items-center ${
                      selectedItems.has(item.id)
                        ? "bg-blue-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {selectedItems.has(item.id) ? (
                      <FaCheckCircle className="mr-2" />
                    ) : (
                      <FaPlusCircle className="mr-2" />
                    )}
                    {selectedItems.has(item.id) ? "Selected" : "Add"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section with Category Navigation */}
      <div className="border-t border-dashed border-gray-400 bg-white px-6 py-6 flex flex-col items-center mt-9">
        {/* Category Navigation */}
        <div
          className="w-full flex space-x-4 "
          style={{ maxWidth: "50vw", overflowX: "scroll", overflowY: "hidden" }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-4 rounded-lg text-lg ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              style={{ flexShrink: 0 }} // Prevent shrinking to maintain fixed width
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>
        {/* Hide scrollbars with additional CSS */}
        <style jsx>{`
          .w-full::-webkit-scrollbar {
            display: none;
          }
          .w-full {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          .scrollbar-hidden::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hidden {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>
      </div>
    </div>
  );
};

export default MainComponent2;
