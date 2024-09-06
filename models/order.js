"use strict";
const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  class Order extends Model {}

  Order.init(
    {
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
    },
    {
      sequelize,
      modelName: "Order",
    }
  );

  Order.associate = (models) => {
    Order.belongsTo(models.Customer, { foreignKey: "CustomerID" });
    Order.belongsTo(models.Table, { foreignKey: "TableID" });
    Order.hasMany(models.OrderItem, { foreignKey: "OrderID" });
    Order.belongsToMany(models.Employee, {
      through: "EmployeeOrders",
      foreignKey: "OrderID",
    });
  };

  return Order;
};
