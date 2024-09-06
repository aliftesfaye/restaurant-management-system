"use strict";
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("EmployeeOrders", {
      EmployeeID: {
        type: DataTypes.UUID,
        references: {
          model: "Employees",
          key: "EmployeeID",
        },
        primaryKey: true,
        allowNull: false,
      },
      OrderID: {
        type: DataTypes.UUID,
        references: {
          model: "Orders",
          key: "OrderID",
        },
        primaryKey: true,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("EmployeeOrders");
  },
};
