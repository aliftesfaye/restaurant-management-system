"use strict";
const { MenuItem } = require("../models");

const createMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.create(req.body);
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.findAll();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMenuItemById = async (req, res) => {
  try {
    const menuItem = await MenuItem.findByPk(req.params.id);
    if (menuItem) {
      res.status(200).json(menuItem);
    } else {
      res.status(404).json({ message: "MenuItem not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMenuItem = async (req, res) => {
  try {
    const [updated] = await MenuItem.update(req.body, {
      where: { MenuItemID: req.params.id },
    });
    if (updated) {
      const updatedMenuItem = await MenuItem.findByPk(req.params.id);
      res.status(200).json(updatedMenuItem);
    } else {
      res.status(404).json({ message: "MenuItem not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteMenuItem = async (req, res) => {
  try {
    const deleted = await MenuItem.destroy({
      where: { MenuItemID: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: "MenuItem not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMenuItem,
  getAllMenuItems,
  getMenuItemById,
  updateMenuItem,
  deleteMenuItem,
};
