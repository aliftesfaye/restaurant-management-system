const express = require("express");
const router = express.Router();
const shiftController = require("../controllers/shiftController");

router.post("/", shiftController.createShift);
router.get("/", shiftController.getAllShifts);
router.get("/:id", shiftController.getShiftById);
router.put("/:id", shiftController.updateShift);
router.delete("/:id", shiftController.deleteShift);
router.get("/filter", shiftController.filterShiftsByDate);

module.exports = router;
