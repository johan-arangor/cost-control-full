const express = require('express');
const { v4: uuidv4 } = require('uuid');
const Cryptr = require('cryptr');
const moment = require('moment'); 
const router = express.Router();
const errors = require('../utils/errors');
const { User } = require('../models/index');
const UserService = require('../services/user.services');
// const jwtGenerator = require('../src/middleware/generateJwt');
// const transporter = require('../src/middleware/configEmail');
// const templateHTLM = require('../features/templates/templatesUsers');

class UserController {
  async login(req, res) {
    try {
      let dataForm = req.body;
      const userService = new UserService();

      userService.ValidateUser(dataForm.user)
        .then(async (validateUser) => {

          return res.status(200).json(validateUser);
        })
        .catch((error) => {
          const dynamicError = errors.DYNAMIC_ERROR('Error inesperado', `Error al obtener validar el usuario. [ERROR] ${error}`, 'error');

          return res.status(500).json({ messaje: dynamicError });
        });
    } catch (error) {
        const dynamicError = errors.DYNAMIC_ERROR('Error inesperado', `Error al obtener la página de inicio. [ERROR] ${error}`, 'error');

        return res.status(500).json({ messaje: dynamicError });
    }
  }
}

module.exports = new UserController();