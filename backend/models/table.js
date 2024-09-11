"use strict";
const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  class Table extends Model {}

  Table.init(
    {
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
    },
    {
      sequelize,
      modelName: "Table",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    }
  );

  Table.associate = (models) => {
    Table.hasMany(models.Order, { foreignKey: "TableID" });
  };

  return Table;
};
