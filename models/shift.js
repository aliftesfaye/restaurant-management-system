"use strict";
const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  class Shift extends Model {}

  Shift.init(
    {
      ShiftID: {
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
        primaryKey: true,
        allowNull: false,
      },
      ShiftDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      StartTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      EndTime: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Shift",
    }
  );

  Shift.associate = (models) => {
    Shift.belongsToMany(models.Employee, {
      through: "EmployeeShifts",
      foreignKey: "ShiftID",
    });
  };

  return Shift;
};
