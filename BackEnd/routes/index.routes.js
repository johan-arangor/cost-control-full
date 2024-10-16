const express = require('express');
const router = express.Router();

const homeRoutes = require('./home.routes');
const userRoutes = require('./user.routes');
const incomeRoutes = require('./income.routes');
const expenseRoutes = require('./expense.routes');
const tagRoutes = require('./tag.routes');

router.use('/', homeRoutes);
router.use('/user', userRoutes);
router.use('/income', incomeRoutes);
router.use('/expense', expenseRoutes);
router.use('/tag', tagRoutes);

module.exports = router;