const express = require('express');
const router = express.Router();
const ExpenseController = require('../controllers/expense.controller');

router.post("/expense", ExpenseController.newTag);
router.get("/expense/", ExpenseController.getAllTags);
router.get("/expense/:id", ExpenseController.getTagId);
router.put("/expense/:id", ExpenseController.editTagId);
router.delete("/expense/:id", ExpenseController.deleteTagId);

module.exports = router;