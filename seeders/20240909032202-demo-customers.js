"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Customers", [
      {
        CustomerID: uuidv4(),
        Name: "John Doe",
        Phone: "123-456-7890",
        Email: "john.doe@example.com",
        Address: "123 Elm Street",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CustomerID: uuidv4(),
        Name: "Jane Smith",
        Phone: "987-654-3210",
        Email: "jane.smith@example.com",
        Address: "456 Oak Avenue",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        CustomerID: uuidv4(),
        Name: "Alice Johnson",
        Phone: "555-123-4567",
        Email: "alice.johnson@example.com",
        Address: "789 Pine Road",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Customers", null, {});
  },
};
