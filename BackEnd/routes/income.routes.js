const express = require('express');
const router = express.Router();
const IncomeController = require('../controllers/income.controller');

router.post("/", IncomeController.newIncome);
router.get("/incomeAll/:userId", IncomeController.getAllIncomes);
router.get("/income/:id", IncomeController.getIncomeId);
router.put("/", IncomeController.editIncomeId);
router.delete("/", IncomeController.deleteIncomeId);

module.exports = router;