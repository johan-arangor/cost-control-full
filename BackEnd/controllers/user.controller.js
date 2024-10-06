const { v4: uuidv4 } = require('uuid');
const errors = require('../utils/errors');
const responses = require('../utils/responses');
const UserService = require('../services/user.services');
const jwtGenerator = require('../middleware/generateJwt');

class UserController {
  async login(req, res) {
    try {
      let dataForm = req.body;
      const userService = new UserService();

      await userService.ValidateUser(dataForm.user)
        .then(async (validateUser) => {
          if (validateUser.state){
            await userService.Decrypt(validateUser.data.password)
                .then(async (passwordDecrypt) => {
                  await userService.ValidateCredentials(validateUser.data.id, dataForm.user, dataForm.password, passwordDecrypt)
                    .then((credentials) =>
                        {
                          res.status(200)
                          .send(credentials);
                        }
                    )
                    .catch((error) => {
                      res.status(500)
                      .send(error);
                    });
                })
                .catch((error) => {
                  let dynamicError = errors.DYNAMIC_GENERAL_ERROR(error.message);

                  res.status(500)
                  .send(dynamicError);
                });
          } else {
              res.status(400)
              .send(errors.AUTH.USER_NOT_FOUND);
          }
        })
        .catch((error) => {
          res.status(400)
          .send(error);
        });
    } catch (error) {
        let dynamicError = errors.DYNAMIC_GENERAL_ERROR(error.message);

        res.status(500)
        .send(dynamicError);
    }
  }

  async signup(req, res) {
    try {
      let dataForm = req.body;
      const userService = new UserService();

      await userService.ValidateUser(dataForm.user)
      .then(async (validateUser) => {
          if (!validateUser.state){
            await userService.Encrypt(dataForm.password)
              .then(async (passwordEncrypt) => {
                await userService.SendEmailConfirm(dataForm.user, passwordEncrypt)
                  .then(() => {
                    res.status(200)
                    .send(responses.RESPONSE_CREATE_ACOUNT);
                  })
                  .catch((error) => {
                    let dynamicError = errors.DYNAMIC_GENERAL_ERROR(error.message);

                    res.status(500)
                    .send(dynamicError);
                  });
              })
              .catch((error) => {
                let dynamicError = errors.DYNAMIC_GENERAL_ERROR(error.message);

                res.status(500)
                .send(dynamicError);
              });
          } else {
            res.status(400)
            .send(errors.DYNAMIC_ERROR("Usuario invalido", `el usuario ${dataForm.user} ya existe y no se puede duplicar`, "error"));
          }
      })
      .catch((error) => {
        res.status(400)
        .send(error);
      });
    } catch (error) {
      let dynamicError = errors.DYNAMIC_GENERAL_ERROR(error.message);

      res.status(500)
      .send(dynamicError);
    }
  }
    
  async confirmAccount (req, res) {
    try {
      const userService = new UserService();

      await jwtGenerator.decodeJwt(req.params.id)
        .then(async (jwtDecode) => {
            await userService.ValidateUser(jwtDecode.user)
            .then(async (validateUser) => {
              if (!validateUser.state){
                await userService.CreateUser(uuidv4(), jwtDecode.user, jwtDecode.password)
                  .then((userCreate) => {
                    res.status(200)
                    .send(userCreate);
                  });
              } else {
                res.status(400)
                .send(errors.DYNAMIC_ERROR("Usuario invalido", `el usuario ${dataForm.user} ya existe y no se puede crear`, "error"));
              }
            })
            .catch((error) => {
              res.status(400)
              .send(error);
            });
        })
        .catch((error) => {
            res.status(400)
            .send(error);
        });
    } catch (error) {
      let dynamicError = errors.DYNAMIC_GENERAL_ERROR(error.message);

      res.status(500)
      .send(dynamicError);
    }
  }

  async renewPassword (req, res) {
    try {
      let dataForm = req.body;
      const userService = new UserService();

      await userService.ValidateUser(dataForm.user)
        .then(async (validateUser) => {
            if (validateUser.state){
              await userService.SendEmailRenew(dataForm.user)
                .then(() => {
                    res.status(200)
                    .send(responses.RESPONSE_RECOVER_ACCOUNT);
                })
                .catch((error) => {
                  res.status(400)
                  .send(error);
                });
            } else {
              res.status(400)
              .send(errors.DYNAMIC_ERROR("Usuario invalido", `el usuario ${dataForm.user} no existe y no se puede enviar el email para recuperar la contraseña`, "error"));
            }
        })
        .catch((error) => {
          res.status(400)
          .send(error);
        });
    } catch (error) {
      let dynamicError = errors.DYNAMIC_GENERAL_ERROR(error.message);

      res.status(500)
      .send(dynamicError);
  }
  }

  async changePasswordLink (req, res) {
    try {
      let dataForm = req.params.id;

      await jwtGenerator.decodeJwt(dataForm)
        .then(async () => {
            res.status(200)
            .send();
        })
        .catch((error) => {
            res.status(400)
            .send(error);
        });   
    } catch (error) {
      let dynamicError = errors.DYNAMIC_GENERAL_ERROR(error.message);

      res.status(500)
      .send(dynamicError);
    }
  }

  async changePassword (req, res) {
    try {
      let dataForm = req.body.token;
      const userService = new UserService();

      await jwtGenerator.decodeJwt(dataForm)
        .then(async (jwtDecode) => {
          await userService.Encrypt(req.body.password)
            .then(async (passwordEncrypt) => {
              await userService.UpdatePasswordUser(jwtDecode.user, passwordEncrypt)
                .then((response) => {
                  res.status(200)
                  .send(response);
                })
                .catch((error) => {
                  res.status(400)
                  .send(error);
                });
            })
            .catch((error) => {
              res.status(400)
              .send(error);
            });
        })
        .catch((error) => {
          res.status(400)
          .send(error);
        });
    } catch (error) {
      let dynamicError = errors.DYNAMIC_GENERAL_ERROR(error.message);

      res.status(500)
      .send(dynamicError);
    }
  }
}

module.exports = new UserController();