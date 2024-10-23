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
const { v4: uuidv4 } = require('uuid');

class UserServices {
    async ValidateUser(user) {
        try {
            let result = await User.findOne(
                { where: { email: user } }
            );
            
            if (result != null) {
                return responses.RESPONSE_DATA(true, {id: result.id, password: result.password});
            } else {
                return responses.RESPONSE_DATA(false, errors.AUTH.INVALID_CREDENTIALS);
            }
        } catch (err){
            throw errors.DYNAMIC_GENERAL_ERROR(err);
        }
    }

    async Encrypt (valueEncrypt) {
            try {
                let encrypted = cryptr.encrypt(valueEncrypt);

                return encrypted;
            } catch (err){
                throw errors.DYNAMIC_GENERAL_ERROR(err);
            }
    }

    async Decrypt (valueEncrypt) {
            try {
                let decrypted = cryptr.decrypt(valueEncrypt);

                return decrypted;
            } catch (err){
                throw errors.DYNAMIC_GENERAL_ERROR(err);
            }
    }

    async CreateUser(names, lastNames, user, passwordEncrypt) {
        try {
            let result = await User.create({
                id: uuidv4(),
                email: user.toLowerCase(),
                names: names.toUpperCase(), 
                lastNames: lastNames.toUpperCase(),
                password: passwordEncrypt
            });

            if (result != null) {
                return responses.RESPONSE_CREATE_USER;
            } else {
                return errors.GENERAL;
            }
        } catch (err){
            throw errors.DYNAMIC_GENERAL_ERROR(err);
        }
    }

    async UpdatePasswordUser(user, passwordEncrypt) {
        try {
            await User.update(
                { password: passwordEncrypt },
                { where: { email: user } }
            );
    
            return responses.RESPONSE_CHANGE_PASSWORD;
        } catch (err){
            throw errors.DYNAMIC_GENERAL_ERROR(err);
        }
    }
    
    async ValidateCredentials(id, user, password, passwordEncrypt) {
        try {
            if (password !== passwordEncrypt) {
                throw errors.AUTH.INVALID_CREDENTIALS;
            } else {
                let profile = {
                    user: user,
                };
    
                profile.token = await jwtGenerator.generateLogIn({user: user, id: id});
    
                return responses.RESPONSE_DATA_MESSAGE(profile, responses.RESPONSE_SESSION_USER);
            }
        } catch (err){
            if (err.text !== undefined) {
                throw err;
            }
            
            throw errors.DYNAMIC_GENERAL_ERROR(err);
        }
    }
    
    async SendEmailConfirm(names, lastNames, user, passwordEncrypt){
        try {
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
        } catch (err){
            throw errors.DYNAMIC_GENERAL_ERROR(err);
        }
    }
    
    async SendEmailCreateUser(user){
        try {
            let link = `${PATH_LINK}/api/${VERSION_API}/user/login`;
            let messageHtml = templateHTLM.confirmCreateUser(link);
        
            await transporter.sendMail({
                from: {
                    name: 'app control cost',
                    address: APP_USER
                },
                to: user,
                subject: 'confirmación de cuenta creada',
                html: messageHtml
            });
        } catch (err){
            throw errors.DYNAMIC_GENERAL_ERROR(err);
        }
    }

    async SendEmailRenew(user){
        try {
            let profile = {
                user: user
            };
            let jwtGenerated = await jwtGenerator.generateRenew(profile);
            let jwtLink = `${PATH_LINK}api/${VERSION_API}/user/changePassword/${jwtGenerated}`;
            let messageHtml = templateHTLM.renewPasswordHtml(jwtLink);
    
            await transporter.sendMail({
                from: {
                    name: 'app control cost',
                    address: APP_USER
                },
                to: user,
                subject: 'solicitud de recuperación de contraseña',
                html: messageHtml
            });
        } catch (err){
            throw errors.DYNAMIC_GENERAL_ERROR(err);
        }
    }
}

module.exports = UserServices;