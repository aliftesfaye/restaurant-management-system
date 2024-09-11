const { EmployeeOrder } = require("../models");

const createEmployeeOrder = async (req, res) => {
  try {
    const employeeOrder = await EmployeeOrder.create(req.body);
    res.status(201).json(employeeOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllEmployeeOrders = async (req, res) => {
  try {
    const employeeOrders = await EmployeeOrder.findAll();
    res.status(200).json(employeeOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmployeeOrderById = async (req, res) => {
  try {
    const employeeOrder = await EmployeeOrder.findByPk(req.params.id);
    if (employeeOrder) {
      res.status(200).json(employeeOrder);
    } else {
      res.status(404).json({ error: "EmployeeOrder not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEmployeeOrder = async (req, res) => {
  try {
    const [updated] = await EmployeeOrder.update(req.body, {
      where: { ID: req.params.id },
    });
    if (updated) {
      const updatedEmployeeOrder = await EmployeeOrder.findByPk(req.params.id);
      res.status(200).json(updatedEmployeeOrder);
    } else {
      res.status(404).json({ error: "EmployeeOrder not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEmployeeOrder = async (req, res) => {
  try {
    const deleted = await EmployeeOrder.destroy({
      where: { ID: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "EmployeeOrder not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createEmployeeOrder,
  getAllEmployeeOrders,
  getEmployeeOrderById,
  updateEmployeeOrder,
  deleteEmployeeOrder,
};
