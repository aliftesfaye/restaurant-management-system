"use strict";
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("EmployeeShifts", {
      EmployeeID: {
        type: DataTypes.UUID,
        references: {
          model: "Employees",
          key: "EmployeeID",
        },
        primaryKey: true,
        allowNull: false,
      },
      ShiftID: {
        type: DataTypes.UUID,
        references: {
          model: "Shifts",
          key: "ShiftID",
        },
        primaryKey: true,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("EmployeeShifts");
  },
};
