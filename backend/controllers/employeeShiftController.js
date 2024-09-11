const { EmployeeShift } = require("../models");

const createEmployeeShift = async (req, res) => {
  try {
    const employeeShift = await EmployeeShift.create(req.body);
    res.status(201).json(employeeShift);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllEmployeeShifts = async (req, res) => {
  try {
    const employeeShifts = await EmployeeShift.findAll();
    res.status(200).json(employeeShifts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmployeeShiftById = async (req, res) => {
  try {
    const employeeShift = await EmployeeShift.findByPk(req.params.id);
    if (employeeShift) {
      res.status(200).json(employeeShift);
    } else {
      res.status(404).json({ error: "EmployeeShift not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEmployeeShift = async (req, res) => {
  try {
    const [updated] = await EmployeeShift.update(req.body, {
      where: { ID: req.params.id },
    });
    if (updated) {
      const updatedEmployeeShift = await EmployeeShift.findByPk(req.params.id);
      res.status(200).json(updatedEmployeeShift);
    } else {
      res.status(404).json({ error: "EmployeeShift not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEmployeeShift = async (req, res) => {
  try {
    const deleted = await EmployeeShift.destroy({
      where: { ID: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "EmployeeShift not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createEmployeeShift,
  getAllEmployeeShifts,
  getEmployeeShiftById,
  updateEmployeeShift,
  deleteEmployeeShift,
};
