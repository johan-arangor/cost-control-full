const express = require('express');
const router = express.Router();

const homeRoutes = require('./home.routes');
const userRoutes = require('./user.routes');

router.use('/', homeRoutes);
router.use('/user', userRoutes);

module.exports = router;