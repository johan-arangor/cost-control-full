require('dotenv').config();
const {HOST_DB, DIALECT_DB, 
  USER_DB_DEV, PASSWORD_DB_DEV, NAME_DB_DEV,
  USER_DB_TEST, PASSWORD_DB_TEST, NAME_DB_DEV_TEST,
  USER_DB_PORD, PASSWORD_DB_PORD, NAME_DB_DEV_PORD,
} = process.env;

module.exports = {
  "development": {
    "username": USER_DB_DEV,
    "password": PASSWORD_DB_DEV,
    "database": NAME_DB_DEV,
    "host": HOST_DB,
    "dialect": DIALECT_DB,
    "define": {
        underscored: true,
    },
  },
  "test": {
    "username": USER_DB_TEST,
    "password": PASSWORD_DB_TEST,
    "database": NAME_DB_DEV_TEST,
    "host": HOST_DB,
    "dialect": DIALECT_DB,
    "define": {
        underscored: true,
    },
  },
  "production": {
    "username": USER_DB_PORD,
    "password": PASSWORD_DB_PORD,
    "database": NAME_DB_DEV_PORD,
    "host": HOST_DB,
    "dialect": DIALECT_DB,
    "define": {
        underscored: true,
    },
  },
  seederStorage: 'sequelize',
  seederStorageTableName: "SequelizeSeeds"
}
