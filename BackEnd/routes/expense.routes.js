const express = require('express');
const router = express.Router();
const ExpenseController = require('../controllers/expense.controller');

router.post("/", ExpenseController.newExpense);
router.get("/expenseAll/:userId", ExpenseController.getAllExpenses);
router.get("/expense/:id", ExpenseController.getExpenseId);
router.put("/", ExpenseController.editExpenseId);
router.delete("/", ExpenseController.deleteExpenseId);

module.exports = router;