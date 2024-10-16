const express = require('express');
const router = express.Router();
const IncomeController = require('../controllers/income.controller');

router.post("/income", IncomeController.newIncome);
router.get("/income/", IncomeController.getAllIncomes);
router.get("/income/:id", IncomeController.getIncomeId);
router.put("/income/:id", IncomeController.editIncomeId);
router.delete("/income/:id", IncomeController.deleteIncomeId);

module.exports = router;