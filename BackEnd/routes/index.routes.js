const express = require('express');
const router = express.Router();
// const userRoutes = require('./users.routes');
const homeRoutes = require('./home.routes');

// router.use('/users', userRoutes);
router.use('/', homeRoutes);

module.exports = router;