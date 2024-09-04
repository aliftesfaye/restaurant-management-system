# Restaurant Management System

This project is an Express application using Sequelize ORM with MySQL for managing a restaurant's data.

## Table of Contents

1. [Project Creation](#project-creation)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Commands](#commands)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## Project Creation

1. **Create a new project directory:**

   ```bash
   mkdir "Restaurant Management System"
   cd "Restaurant Management System"
2. **Initialize a new Node.js project:**
   ```bash
   npm init -y

## Installation

1. **Install required dependencies:**
   ```bash
   npm install express sequelize sequelize-cli mysql2 body-parser dotenv

## Configuration

1. **Initialize Sequelize:**
   ```bash
   npx sequelize-cli init

2. **Create a .env file:**

Create a file named .env in the root of your project to store sensitive database credentials.

```javascript
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database_name
DB_HOST=your_database_host
DB_DIALECT=your_database_dialect
```

3. **Update Sequelize configuration:**

Modify config/config.js to use the environment variables from the .env file.

```javascript
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
};
```


# Commands

Sequelize Commands

1. **Generate a new migration:**

```bash
npx sequelize-cli migration:generate --name <migration-name>

npx sequelize-cli migration:generate --name create-customers
npx sequelize-cli migration:generate --name create-tables
npx sequelize-cli migration:generate --name create-orders
npx sequelize-cli migration:generate --name create-menu-items
npx sequelize-cli migration:generate --name create-order-items
npx sequelize-cli migration:generate --name create-employees
npx sequelize-cli migration:generate --name create-employee-orders
npx sequelize-cli migration:generate --name create-shifts
npx sequelize-cli migration:generate --name create-employee-shifts
```

Edit the migration files in migrations/ to define table schemas and constraints. For example, create-customers.js might look like:

```javascript
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      CustomerID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Phone: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Address: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Customers');
  }
};
```
2. **Run migrations:**

```bash
npx sequelize-cli db:migrate
```

3. **Generate a new model:**

```bash
npx sequelize-cli model:generate --name <model-name> --attributes <attribute-name>:<data-type>,<attribute-name>:<data-type>

npx sequelize-cli model:generate --name Customer --attributes Name:string,Phone:string,Email:string,Address:string
npx sequelize-cli model:generate --name Table --attributes TableNumber:integer,SeatingCapacity:integer,Location:string
npx sequelize-cli model:generate --name Order --attributes OrderDate:date,TotalAmount:float,Status:enum('pending','completed','cancelled'),CustomerID:integer,TableID:integer
npx sequelize-cli model:generate --name MenuItem --attributes Name:string,Description:string,Price:float,Category:enum('appetizer','main course','dessert')
npx sequelize-cli model:generate --name OrderItem --attributes Quantity:integer,Price:float,OrderID:integer,MenuItemID:integer
npx sequelize-cli model:generate --name Employee --attributes Name:string,Position:string,Phone:string,Email:string
npx sequelize-cli model:generate --name EmployeeOrder --attributes EmployeeID:integer,OrderID:integer
npx sequelize-cli model:generate --name Shift --attributes ShiftDate:date,StartTime:time,EndTime:time
npx sequelize-cli model:generate --name EmployeeShift --attributes EmployeeID:integer,ShiftID:integer

```

Edit each generated model in models/ to define associations: For example, models/customer.js might look like:

```javascript
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    Name: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Email: DataTypes.STRING,
    Address: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    Customer.hasMany(models.Order, { foreignKey: 'CustomerID' });
  };
  return Customer;
};
```

models/customer.js might look like:

```javascript
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    OrderDate: DataTypes.DATE,
    TotalAmount: DataTypes.FLOAT,
    Status: DataTypes.ENUM('pending', 'completed', 'cancelled'),
    CustomerID: DataTypes.INTEGER,
    TableID: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.Customer, { foreignKey: 'CustomerID' });
    Order.belongsTo(models.Table, { foreignKey: 'TableID' });
    Order.hasMany(models.OrderItem, { foreignKey: 'OrderID' });
    Order.belongsToMany(models.Employee, { through: models.EmployeeOrder, foreignKey: 'OrderID' });
  };
  return Order;
};
```

4. **Generate a new seeder:**

```bash
npx sequelize-cli seed:generate --name <seeder-name>
npx sequelize-cli seed:generate --name demo-customers

```

5. **Run seeders:**

```bash
npx sequelize-cli db:seed:all
```

6. **Create a new controller:**

Manually create a new controller file in the controllers/ directory.
Example of controllers/customerController.js:

```javascript
const { Customer } = require('../models');

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const [updated] = await Customer.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedCustomer = await Customer.findByPk(req.params.id);
      res.json(updatedCustomer);
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const deleted = await Customer.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
};
```

7. **Create a new route file:**
   
Manually create a new route file in the routes/ directory.
Example of routes/customerRoutes.js:

```javascript
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/', customerController.getAllCustomers);
router.get('/:id', customerController.getCustomerById);
router.post('/', customerController.createCustomer);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
```












