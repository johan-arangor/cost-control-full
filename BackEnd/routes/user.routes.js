const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.post("/login", UserController.login);
router.post("/signup", UserController.signup);
router.get("/confirmAccount/:id", UserController.confirmAccount);
router.post("/renewAccount", UserController.renewPassword);
router.get("/changePasswordLink/:id", UserController.changePasswordLink);
router.post("/changePassword", UserController.changePassword);

module.exports = router;