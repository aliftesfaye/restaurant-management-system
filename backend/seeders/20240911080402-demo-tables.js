"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tables",
      [
        {
          TableID: uuidv4(),
          TableNumber: 1,
          SeatingCapacity: 4,
          Location: "Near the window",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TableID: uuidv4(),
          TableNumber: 2,
          SeatingCapacity: 2,
          Location: "Near the bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TableID: uuidv4(),
          TableNumber: 3,
          SeatingCapacity: 6,
          Location: "In the center",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tables", null, {});
  },
};
