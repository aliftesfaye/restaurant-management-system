const express = require("express");
const router = express.Router();
const employeeOrderController = require("../controllers/employeeOrderController");

router.post("/", employeeOrderController.createEmployeeOrder);
router.get("/", employeeOrderController.getAllEmployeeOrders);
router.get("/:id", employeeOrderController.getEmployeeOrderById);
router.put("/:id", employeeOrderController.updateEmployeeOrder);
router.delete("/:id", employeeOrderController.deleteEmployeeOrder);

module.exports = router;
