require('dotenv').config();
const { User } = require('../models/index');
const errors = require('../utils/errors');
const Cryptr = require('cryptr');
const responses = require('../utils/responses');
const jwtGenerator = require('../middleware/generateJwt');
const transporter = require('../middleware/configEmail');
const templateHTLM = require('../templates/users.templates');
const { SECRETORPRIVATEKEY, PATH_LINK, VERSION_API, NAME_APP, APP_USER } = process.env;
const cryptr = new Cryptr(SECRETORPRIVATEKEY);

class UserServices {
    async ValidateUser(user) {
        return new Promise(async (resolve) => {
            let result = await User.findOne(
                { where: { email: user } }
            );
            
            if (result != null) {
                resolve(responses.RESPONSE_DATA(true, {id: result.id, password: result.password}));
            } else {
                resolve(responses.RESPONSE_DATA(false, errors.AUTH.INVALID_CREDENTIALS));
            }
        });
    }

    async Encrypt (valueEncrypt) {
        return new Promise((resolve) => {
            try {
                let encrypted = cryptr.encrypt(valueEncrypt);

                resolve(encrypted);
            } catch (error) {
                reject(`Encryption failed: ${error.message}`);
            }
        });
    }

    async Decrypt (valueEncrypt) {
        return new Promise((resolve) => {
            try {
                let decrypted = cryptr.decrypt(valueEncrypt);

                resolve(decrypted);
            } catch (error) {
                console.log('[errrrrrr]', error)
                reject(`Decryption failed: ${error.message}`);
            }
        });
    }

    async CreateUser(uuid, names, lastNames, user, passwordEncrypt) {
        return new Promise((resolve, reject) => {
            let result = User.create({
                id: uuid,
                email: user.toLowerCase(),
                names: names.toUpperCase(), 
                lastNames: lastNames.toUpperCase(),
                password: passwordEncrypt
            });

            if(result =! null) {
                resolve(responses.RESPONSE_CREATE_USER);
            } else {
                reject(errors.GENERAL);
            }
        });
    }

    async UpdatePasswordUser(user, passwordEncrypt) {
        return new Promise((resolve, reject) => {
            let result = User.update(
                { password: passwordEncrypt },
                { where: { email: user } }
            );
    
            if(result =! null) {
                resolve(responses.RESPONSE_CHANGE_PASSWORD);
            } else {
                reject(errors.GENERAL.ERROR);
            }
        });
    }
    
    async ValidateCredentials(id, user, password, passwordEncrypt) {
        return new Promise(async (resolve, reject) => {
            if (password !== passwordEncrypt) {
                reject(errors.AUTH.INVALID_CREDENTIALS);
            } else {
                let profile = {
                    user: user,
                };
    
                profile.token = await jwtGenerator.generateLogIn({user: user, id: id});
    
                resolve(responses.RESPONSE_DATA_MESSAGE(profile, responses.RESPONSE_SESSION_USER));
            }
        });
    }
    
    async SendEmailConfirm(names, lastNames, user, passwordEncrypt){
        let profile = {
            names: names,
            lastNames: lastNames,
            email: user,
            password: passwordEncrypt
        };
        let jwtGenerated = await jwtGenerator.generateSignIn(profile);
        let jwtLink = `${PATH_LINK}api/${VERSION_API}/user/confirmAccount/${jwtGenerated}`;
        let messageHtml = templateHTLM.confirmEmail(jwtLink);
    
        return new Promise((resolve, reject) => {
            transporter.sendMail({
                from: {
                    name: NAME_APP,
                    address: APP_USER
                },
                to: user,
                subject: 'envio de confirmación',
                html: messageHtml
            }, (error, info) => {
                if (error) {
                    reject(errors.DYNAMIC_GENERAL_ERROR('Error al enviar correo electrónico'));
                } else {
                    resolve(responses.RESPONSE_CREATE_ACOUNT);
                }
            });
        });
    }
    
    async SendEmailCreateUser(user){

        let link = `${PATH_LINK}/api/${VERSION_API}/user/login`;
        let messageHtml = templateHTLM.confirmCreateUser(link);
    
        try {
            await transporter.sendMail({
                from: {
                    name: 'app control cost',
                    address: APP_USER
                },
                to: user,
                subject: 'confirmación de cuenta creada',
                html: messageHtml
            });
        } catch (error) {
        }
    }

    async SendEmailRenew(user){
        let profile = {
            user: user
        };
        let jwtGenerated = await jwtGenerator.generateRenew(profile);
        let jwtLink = `${PATH_LINK}api/${VERSION_API}/user/changePassword/${jwtGenerated}`;
        let messageHtml = templateHTLM.renewPasswordHtml(jwtLink);
    
        try {
            await transporter.sendMail({
                from: {
                    name: 'app control cost',
                    address: APP_USER
                },
                to: user,
                subject: 'solicitud de recuperación de contraseña',
                html: messageHtml
            });
        } catch (error) {
        }
    }
}

module.exports = UserServices;