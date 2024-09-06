"use strict";
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Orders", {
      OrderID: {
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
        primaryKey: true,
        allowNull: false,
      },
      OrderDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      TotalAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      Status: {
        type: DataTypes.ENUM("pending", "completed", "cancelled"),
        allowNull: false,
      },
      CustomerID: {
        type: DataTypes.UUID,
        references: {
          model: "Customers",
          key: "CustomerID",
        },
        allowNull: false,
      },
      TableID: {
        type: DataTypes.UUID,
        references: {
          model: "Tables",
          key: "TableID",
        },
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Orders");
  },
};
