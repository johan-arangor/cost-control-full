const express = require('express');
const router = express.Router();
const IncomeController = require('../controllers/income.controller');

router.post("/income", IncomeController.newIncome);
router.get("/incomeAll/:userId", IncomeController.getAllIncomes);
router.get("/income/:id", IncomeController.getIncomeId);
router.put("/income", IncomeController.editIncomeId);
router.delete("/income", IncomeController.deleteIncomeId);

module.exports = router;