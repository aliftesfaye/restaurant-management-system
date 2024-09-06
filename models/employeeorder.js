"use strict";
const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  class EmployeeOrder extends Model {}

  EmployeeOrder.init(
    {
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
    },
    {
      sequelize,
      modelName: "EmployeeOrder",
    }
  );

  return EmployeeOrder;
};
