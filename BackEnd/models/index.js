'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const config = require('../config/config');
const varials = {
  database: config[process.env.NODE_ENV].database,
  username: config[process.env.NODE_ENV].username,
  password: config[process.env.NODE_ENV].password,
  host: config[process.env.NODE_ENV].host,
  dialect: config[process.env.NODE_ENV].dialect
}

//Declaración del objeto DB
const db = {};

//Inicialización de la conexión
const sequelize = new Sequelize(
  varials.database, 
  varials.username, 
  varials.password, 
  {
    host: varials.host,
    dialect: varials.dialect
  }
);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

//Realizar las asociaciones de los modelos
Object.keys(db).forEach(modelName => {
  console.log('modelName',modelName)
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
