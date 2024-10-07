const jwt = require('jsonwebtoken');
const errors = require('../utils/errors');
require('dotenv').config();

const jwtController = {};

jwtController.generateLogIn = (dataUser) => {
    return generateJWT(dataUser, '2h');
}

jwtController.generateSignIn = (dataUser) => {
    return generateJWT(dataUser, '1d');
}

jwtController.generateRenew = (dataUser) => {
    return generateJWT(dataUser, '10m');
}

jwtController.decodeJwt = (jwtString) => {
    return new Promise((resolve, reject)=> {
        let decodeJWT = jwt.decode(jwtString);

        if (Date.now() >= decodeJWT.exp * 1000) {
            reject(errors.AUTH.TOKEN_EXPIRED);
        } else {
            return resolve(decodeJWT);
        }
    });
}

function generateJWT(data, time) {
    return new Promise((resolve, reject) => {
        let token = jwt.sign(data, 
            process.env.SECRETORPRIVATEKEY , {
            expiresIn: time
        });

        token ? resolve(token) : reject(errors.TOKEN_NOT_GENERATE);
    });
}

module.exports = jwtController;