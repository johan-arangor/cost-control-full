const express = require('express');
const router = express.Router();
const db = require('../infrastructure/database');
const errors = require('../utils/errors');

class HomeController {
  async getIndex(req, res) {
    try {
      // Lógica para obtener datos de la base de datos
        //   const data = await db.query('SELECT * FROM tabla');
        const result = {
            title: 'Página de inicio',
            message: 'Bienvenido a la aplicación',
            // data: data.rows,
        };
        
        return res.status(200).json(result);
    } catch (error) {
        const dynamicError = errors.DYNAMIC_ERROR('Error inesperado', `Error al obtener la página de inicio. [ERROR] ${error}`, 'error');
        return res.status(500).json({ messaje: dynamicError });
    }
  }
}

module.exports = new HomeController();