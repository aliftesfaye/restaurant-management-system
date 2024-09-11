const express = require("express");
const router = express.Router();
const employeeShiftController = require("../controllers/employeeShiftController");

router.post("/", employeeShiftController.createEmployeeShift);
router.get("/", employeeShiftController.getAllEmployeeShifts);
router.get("/:id", employeeShiftController.getEmployeeShiftById);
router.put("/:id", employeeShiftController.updateEmployeeShift);
router.delete("/:id", employeeShiftController.deleteEmployeeShift);

module.exports = router;
