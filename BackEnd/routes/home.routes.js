// routes.js
const express = require('express');
const router = express.Router();

// Importar controladores
// const UserController = require('./controllers/user.controller');
// const AuthController = require('./controllers/auth.controller');
// const EmailController = require('./controllers/email.controller');
// const ConfigController = require('./controllers/config.controller');
// const ErrorController = require('./controllers/error.controller');
// const DocsController = require('./controllers/docs.controller');
const HomeController = require('../controllers/home.controller');

// Rutas de la API
// router.get('/users', UserController.getUsers);
// router.get('/users/:id', UserController.getUserById);
// router.post('/users', UserController.createUser);
// router.put('/users/:id', UserController.updateUser);
// router.delete('/users/:id', UserController.deleteUser);

// // Rutas de autenticación
// router.post('/auth/login', AuthController.login);
// router.post('/auth/register', AuthController.register);
// router.post('/auth/logout', AuthController.logout);

// // Rutas de email
// router.post('/email/welcome', EmailController.sendWelcomeEmail);
// router.post('/email/reset-password', EmailController.sendResetPasswordEmail);

// // Rutas de configuración
// router.get('/config', ConfigController.getConfig);
// router.put('/config', ConfigController.updateConfig);

// // Rutas de errores
// router.get('/errors', ErrorController.getErrors);
// router.get('/errors/:id', ErrorController.getErrorById);

// // Rutas de documentación
// router.get('/docs', DocsController.getDocs);

// Rutas de inicio
router.get('/', HomeController.getIndex);

module.exports = router;