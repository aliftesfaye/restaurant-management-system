const { Shift } = require("../models");
const { Op } = require("sequelize");

const createShift = async (req, res) => {
  try {
    const shift = await Shift.create(req.body);
    res.status(201).json(shift);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllShifts = async (req, res) => {
  try {
    const shifts = await Shift.findAll();
    res.status(200).json(shifts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getShiftById = async (req, res) => {
  try {
    const shift = await Shift.findByPk(req.params.id);
    if (shift) {
      res.status(200).json(shift);
    } else {
      res.status(404).json({ error: "Shift not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateShift = async (req, res) => {
  try {
    const [updated] = await Shift.update(req.body, {
      where: { ShiftID: req.params.id },
    });
    if (updated) {
      const updatedShift = await Shift.findByPk(req.params.id);
      res.status(200).json(updatedShift);
    } else {
      res.status(404).json({ error: "Shift not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteShift = async (req, res) => {
  try {
    const deleted = await Shift.destroy({
      where: { ShiftID: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Shift not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const filterShiftsByDate = async (req, res) => {
  try {
    const date = req.query.date;

    if (!date) {
      return res
        .status(400)
        .json({ error: "Date query parameter is required." });
    }

    const shifts = await Shift.findAll({
      where: {
        ShiftDate: {
          [Op.eq]: date,
        },
      },
    });

    res.status(200).json(shifts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createShift,
  getAllShifts,
  getShiftById,
  updateShift,
  deleteShift,
  filterShiftsByDate,
};
