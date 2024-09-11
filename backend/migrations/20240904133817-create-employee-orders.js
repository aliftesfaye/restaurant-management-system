"use strict";
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("EmployeeOrders", {
      ID: {
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
        primaryKey: true,
        allowNull: false,
      },
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
    await queryInterface.dropTable("EmployeeOrders");
  },
};
