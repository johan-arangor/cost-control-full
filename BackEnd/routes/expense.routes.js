const express = require('express');
const router = express.Router();
const ExpenseController = require('../controllers/expense.controller');

router.post("/expense", ExpenseController.newExpense);
router.get("/expenseAll/:userId", ExpenseController.getAllExpenses);
router.get("/expense/:id", ExpenseController.getExpenseId);
router.put("/expense", ExpenseController.editExpenseId);
router.delete("/expense", ExpenseController.deleteExpenseId);

module.exports = router;