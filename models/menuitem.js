"use strict";
const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  class MenuItem extends Model {}

  MenuItem.init(
    {
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
    },
    {
      sequelize,
      modelName: "MenuItem",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );

  MenuItem.associate = (models) => {
    MenuItem.hasMany(models.OrderItem, { foreignKey: "MenuItemID" });
  };

  return MenuItem;
};
