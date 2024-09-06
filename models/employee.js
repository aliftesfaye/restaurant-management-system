"use strict";
const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  class Employee extends Model {}

  Employee.init(
    {
      EmployeeID: {
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
        primaryKey: true,
        allowNull: false,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );

  Employee.associate = (models) => {
    Employee.belongsToMany(models.Order, {
      through: "EmployeeOrders",
      foreignKey: "EmployeeID",
    });
    Employee.belongsToMany(models.Shift, {
      through: "EmployeeShifts",
      foreignKey: "EmployeeID",
    });
  };

  return Employee;
};
