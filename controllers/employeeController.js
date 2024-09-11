const { Employee } = require("../models");
const { Op } = require("sequelize");

const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const [updated] = await Employee.update(req.body, {
      where: { EmployeeID: req.params.id },
    });
    if (updated) {
      const updatedEmployee = await Employee.findByPk(req.params.id);
      res.status(200).json(updatedEmployee);
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const deleted = await Employee.destroy({
      where: { EmployeeID: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Employee not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const filterEmployeesByName = async (req, res) => {
  try {
    const name = req.query.name;

    if (!name) {
      return res
        .status(400)
        .json({ error: "Name query parameter is required." });
    }

    const employees = await Employee.findAll({
      where: {
        Name: {
          [Op.like]: `%${name}%`,
        },
      },
    });

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  filterEmployeesByName,
};
