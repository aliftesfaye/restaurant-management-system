const { Table } = require("../models");

const createTable = async (req, res) => {
  try {
    const table = await Table.create(req.body);
    res.status(201).json(table);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllTables = async (req, res) => {
  try {
    const tables = Table.findAll();
    res.status(200).json(tables);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTableById = async (req, res) => {
  try {
    const table = Table.findByPk(req.params.id);
    if (table) {
      res.status(200).json(table);
    } else {
      res.status(404).json({ error: "Table not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTable = async (req, res) => {
  try {
    const [updated] = await Table.update(req.body, {
      where: { TableID: req.params.id },
    });
    if (updated) {
      const updatedTable = await Table.findByPk(req.params.id);
      res.status(200).json(updatedTable);
    } else {
      res.status(404).json({ error: "Table not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTable = async (req, res) => {
  try {
    const deleted = await Table.destroy({
      where: { TableID: req.params.id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: "Table not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const filterTables = async (req, res) => {
  try {
    const location = req.query.location;
    const minCapacity = req.query.minCapacity;

    const whereClause = {};

    if (location) {
      whereClause.Location = {
        [Op.like]: `%${location}%`,
      };
    }

    if (minCapacity) {
      whereClause.SeatingCapacity = {
        [Op.gte]: parseInt(minCapacity, 10),
      };
    }

    const tables = await Table.findAll({
      where: whereClause,
    });

    res.status(200).json(tables);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createTable,
  getAllTables,
  getTableById,
  updateTable,
  deleteTable,
  filterTables,
};
