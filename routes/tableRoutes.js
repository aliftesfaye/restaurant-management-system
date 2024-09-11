"use strict";

const express = require("express");
const router = express.Router();
const TableController = require("../controllers/tableController");

router.post("/", TableController.createTable);
router.get("/", TableController.getAllTables);
router.get("/:id", TableController.getTableById);
router.put("/:id", TableController.updateTable);
router.delete("/:id", TableController.deleteTable);

router.get("/filter", TableController.filterTables);

module.exports = router;
