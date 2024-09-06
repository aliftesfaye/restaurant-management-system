"use strict";
const { Model, DataTypes } = require("sequelize");
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize) => {
  class Customer extends Model {}

  Customer.init(
    {
      CustomerID: {
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
        primaryKey: true,
        allowNull: false,
      },
      Name: {
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
      Address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );

  Customer.associate = (models) => {
    Customer.hasMany(models.Order, { foreignKey: "CustomerID" });
  };

  return Customer;
};
