"use strict";
const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  class OrderItem extends Model {}

  OrderItem.init(
    {
      OrderItemID: {
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
        primaryKey: true,
        allowNull: false,
      },
      Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      OrderID: {
        type: DataTypes.UUID,
        references: {
          model: "Orders",
          key: "OrderID",
        },
        allowNull: false,
      },
      MenuItemID: {
        type: DataTypes.UUID,
        references: {
          model: "MenuItems",
          key: "MenuItemID",
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "OrderItem",
    }
  );

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.Order, { foreignKey: "OrderID" });
    OrderItem.belongsTo(models.MenuItem, { foreignKey: "MenuItemID" });
  };

  return OrderItem;
};
