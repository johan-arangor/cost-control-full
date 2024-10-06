require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT_BACK, VERSION_API } = process.env;
const { sequelize } = require('./models/index');

//Config Morgan
app.use(morgan('dev'));

//Config Apis
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Cors
app.use(cors({origin:true}))

//routers
try {
    const routesIndex = require('./routes/index.routes');
    app.use(`/api/${VERSION_API}`, routesIndex);
  } catch (error) {
    console.error('Error al definir las rutas:', error);
    process.exit(1);
  }

// Iniciar servidor
app.listen(PORT_BACK, () => {
  console.log(`Server started on port http://localhost:${PORT_BACK}`);

  // sequelize.sync({ force: true })//para hacer la sincronizacion de la bd
  //sincroniza la bd sin alterar los datos almacenados
  // sequelize.sync({ alter: true })
  // .then(() => {
  //   console.log('Se ha establecido la conexión');
  // });
  sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
});