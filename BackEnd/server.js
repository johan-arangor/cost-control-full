const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();
const {PORT_BACK, VERSION_API} = process.env;
const PORT = process.env.PORT || PORT_BACK;

//Config Apis
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Cors
app.use(cors({origin:true}))

//routers
const routesIndex = require('./routes/index.routes');
app.use(`/api/${VERSION_API}`, routesIndex);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});