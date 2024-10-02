const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

router.post("/login", UserController.login);
// route.post("/signup", usersControllers.signup);
// route.get("/confirmAccount/:id", usersControllers.confirmAccount);
// route.post("/renewAccount", usersControllers.renewPassword);
// route.get("/changePasswordLink/:id", usersControllers.changePasswordLink);
// route.post("/changePassword", usersControllers.changePassword);

module.exports = router;