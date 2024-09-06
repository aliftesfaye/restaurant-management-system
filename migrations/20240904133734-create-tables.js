"use strict";
const { DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Tables", {
      TableID: {
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
        primaryKey: true,
        allowNull: false,
      },
      TableNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      SeatingCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Tables");
  },
};
