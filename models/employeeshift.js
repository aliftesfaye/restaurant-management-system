"use strict";
const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  class EmployeeShift extends Model {}

  EmployeeShift.init(
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
      ShiftID: {
        type: DataTypes.UUID,
        references: {
          model: "Shifts",
          key: "ShiftID",
        },
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "EmployeeShift",
    }
  );

  return EmployeeShift;
};
