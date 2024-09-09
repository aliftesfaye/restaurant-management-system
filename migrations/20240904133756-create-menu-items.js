"use strict";
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("MenuItems", {
      MenuItemID: {
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
        primaryKey: true,
        allowNull: false,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      Category: {
        type: DataTypes.ENUM("appetizer", "main course", "dessert"),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("MenuItems");
  },
};
