const express = require('express');
const router = express.Router();
const errors = require('../utils/errors');
const { User } = require('../models/index');

class HomeController {
  async getIndex(req, res) {
    try 
    {
      const responseDB = await User.findAll();
      const result = {
          title: 'Página de inicio',
          message: 'Bienvenido a la aplicación',
          data: responseDB,
      };
      
      return res.status(200).json(result);
    } catch (error) {
      const dynamicError = errors.DYNAMIC_ERROR('Error inesperado', `Error al obtener la página de inicio. [ERROR] ${error}`, 'error');
      return res.status(500).json({ messaje: dynamicError });
    }
  }
}

module.exports = new HomeController();