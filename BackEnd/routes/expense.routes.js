const express = require('express');
const router = express.Router();
const ExpenseController = require('../controllers/expense.controller');

router.post("/expense", ExpenseController.newExpense);
router.get("/expense/", ExpenseController.getAllExpenses);
router.get("/expense/:id", ExpenseController.getExpenseId);
router.put("/expense/:id", ExpenseController.editExpenseId);
router.delete("/expense/:id", ExpenseController.deleteExpenseId);

module.exports = router;