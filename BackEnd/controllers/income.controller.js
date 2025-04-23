const IncomeService = require('../services/income.services');
const UserServices = require('../services/user.services');
const errors = require('../utils/errors');

class IncomeController {
  async newIncome(req, res) {
    try {
        const userService = new UserServices();
        let dataForm = req.body;
  
        await userService.GetIdUser(dataForm.userId)
        .then(async (userId) => {  
            const incomeService = new IncomeService();
    
            await incomeService.CreateIncome(dataForm.description, dataForm.amount, dataForm.observation, userId, dataForm.tags, dataForm.vehiculeId, dataForm.creditId)
                .then(async (response) => {
                    res.status(200)
                    .send(response);
                })
                .catch((error) => {
                    res.status(400)
                    .send(error);
                });
            })
            .catch(error => {
                errors.DYNAMIC_GENERAL_ERROR(error.message);
            });
    } catch (error) {
        let dynamicError = errors.DYNAMIC_GENERAL_ERROR(error.message);

        res.status(500)
        .send(dynamicError);
    }
  }

  async getAllIncomes(req, res) {
    try {
        let user = req.params;
        const userService = new UserServices();
        const incomeService = new IncomeService();
  
        await userService.GetIdUser(user.userId)
        .then(async (response) => {            
            await incomeService.GetAllIncome(response)
            .then(async (result) => {
                res.status(200)
                .send(result);
            })
            .catch((error) => {
                res.status(400)
                .send(error);
            });
        })
        .catch(error => {
            errors.DYNAMIC_GENERAL_ERROR(error.message);
        })
    } catch (error) {
        let dynamicError = errors.DYNAMIC_GENERAL_ERROR(error.message);

        res.status(500)
        .send(dynamicError);
    }
  }

  async getIncomeId(req, res) {
    try {
        let dataForm = req.params;
        const incomeService = new IncomeService();
  
        await incomeService.GetIdIncome(dataForm.Id)
            .then(async (response) => {
                res.status(200)
                .send(response);
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

  async editIncomeId(req, res) {
    try {
        let dataForm = req.body;
        const incomeService = new IncomeService();
  
        await incomeService.UpdateIncome(dataForm.description, dataForm.amount, dataForm.tags, dataForm.vehiculeId, dataForm.creditId)
            .then(async (response) => {
                res.status(200)
                .send(response);
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

  async deleteIncomeId(req, res) {
    try {
        let dataForm = req.body;
        const incomeService = new IncomeService();
  
        await incomeService.DeleteIncome(dataForm.Id)
            .then(async (response) => {
                res.status(200)
                .send(response);
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

module.exports = new IncomeController();