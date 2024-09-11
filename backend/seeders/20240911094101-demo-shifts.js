"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Shifts", [
      {
        ShiftID: uuidv4(),
        ShiftDate: new Date(), // or specific date
        StartTime: "08:00:00",
        EndTime: "16:00:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ShiftID: uuidv4(),
        ShiftDate: new Date(),
        StartTime: "16:00:00",
        EndTime: "00:00:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ShiftID: uuidv4(),
        ShiftDate: new Date(),
        StartTime: "00:00:00",
        EndTime: "08:00:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ShiftID: uuidv4(),
        ShiftDate: new Date(),
        StartTime: "09:00:00",
        EndTime: "17:00:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ShiftID: uuidv4(),
        ShiftDate: new Date(),
        StartTime: "11:00:00",
        EndTime: "19:00:00",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Shifts", null, {});
  },
};
