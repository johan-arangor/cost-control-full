require('dotenv').config();
const { User } = require('../models/index');
const errors = require('../utils/errors');
const Cryptr = require('cryptr');
const moment = require('moment'); 
const responses = require('../utils/responses');
const jwtGenerator = require('../middleware/generateJwt');
const transporter = require('../middleware/configEmail');
const templateHTLM = require('../templates/users.templates');
const { SECRETORPRIVATEKEY, PATH_LINK, VERSION_API } = process.env;

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
            let cryptr = new Cryptr(SECRETORPRIVATEKEY);
    
            resolve(cryptr.encrypt(valueEncrypt));
        });
    }

    async Decrypt (valueEncrypt) {
        return new Promise((resolve) => {
            let cryptr = new Cryptr(SECRETORPRIVATEKEY);
    
            resolve(cryptr.decrypt(valueEncrypt));
        });
    }

    async CreateUser(uuid, user, passwordEncrypt) {
        return new Promise((resolve, reject) => {
            let result = Users.create({
                id: uuid,
                user: user,
                password: passwordEncrypt,
                dateCreate: moment().format("YYYY-MM-DD"),
                lastDate: moment().format("YYYY-MM-DD")
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
            let result = Users.update(
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
    
    async SendEmailConfirm(user, passwordEncrypt){
        let profile = {
            user: user,
            password: passwordEncrypt
        };
        let jwtGenerated = await jwtGenerator.generateSignIn(profile);
        let jwtLink = `${PATH_LINK}/api/${VERSION_API}/confirmAccount/${jwtGenerated}`;
        let messageHtml = templateHTLM.confirmEmail(jwtLink);
    
        try {
            await transporter.sendMail({
                from: {
                    name: NAME_APP,
                    address: APP_USER
                },
                to: user,
                subject: 'evio de confirmación',
                html: messageHtml
            });
        } catch (error) {
            return 
        }
    }
    
    async SendEmailRenew(user){
        let profile = {
            user: user
        };
        let jwtGenerated = await jwtGenerator.generateRenew(profile);
        let jwtLink = `${PATH_LINK}/api/${VERSION_API}/changePassword/${jwtGenerated}`;
        let messageHtml = templateHTLM.renewPasswordHtml(jwtLink);
    
        try {
            await transporter.sendMail({
                from: {
                    name: 'app control cost',
                    address: APP_USER
                },
                to: user,
                subject: 'envío de recuperación de contraseña',
                html: messageHtml
            });
        } catch (error) {
        }
    }
}

module.exports = UserServices;