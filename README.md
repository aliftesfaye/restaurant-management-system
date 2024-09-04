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


4. **Update .sequelizerc configuration:**

Create or update .sequelizerc to specify paths for models, migrations, and seeders.

```javascript
const path = require('path');

module.exports = {
  'models-path': path.resolve('models'),
  'migrations-path': path.resolve('migrations'),
  'seeders-path': path.resolve('seeders'),
  'config': path.resolve('config/config.js'),
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








