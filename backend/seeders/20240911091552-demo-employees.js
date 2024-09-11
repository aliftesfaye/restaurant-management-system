"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Employees", [
      {
        EmployeeID: uuidv4(),
        Name: "Emma Johnson",
        Position: "Head Chef",
        Phone: "101-202-3030",
        Email: "emma.johnson@restaurant.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        EmployeeID: uuidv4(),
        Name: "Liam Smith",
        Position: "Waitstaff",
        Phone: "404-505-6060",
        Email: "liam.smith@restaurant.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        EmployeeID: uuidv4(),
        Name: "Olivia Davis",
        Position: "Restaurant Manager",
        Phone: "707-808-9090",
        Email: "olivia.davis@restaurant.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        EmployeeID: uuidv4(),
        Name: "Noah Brown",
        Position: "Sous Chef",
        Phone: "111-222-3333",
        Email: "noah.brown@restaurant.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        EmployeeID: uuidv4(),
        Name: "Sophia Martinez",
        Position: "Hostess",
        Phone: "444-555-6666",
        Email: "sophia.martinez@restaurant.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Employees", null, {});
  },
};
