"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("MenuItems", [
      {
        MenuItemID: uuidv4(),
        Name: "Bruschetta",
        Description: "Toasted bread with tomatoes, garlic, and basil.",
        Price: 8.99,
        Category: "appetizer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        MenuItemID: uuidv4(),
        Name: "Margherita Pizza",
        Description: "Classic pizza with tomato, mozzarella, and basil.",
        Price: 12.99,
        Category: "main course",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        MenuItemID: uuidv4(),
        Name: "Tiramisu",
        Description:
          "Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cheese.",
        Price: 6.99,
        Category: "dessert",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("MenuItems", null, {});
  },
};
