const ExpenseService = require('../services/expense.services');
const errors = require('../utils/errors');

class ExpenseController {
  async newExpense(req, res) {
    try {
        let dataForm = req.body.token;
        const expenseService = new ExpenseService();
  
        await expenseService.CreateExpense(dataForm)
            .then(async (result) => {
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

  async getAllExpenses(req, res) {
    try {
        let dataForm = req.body.token;
        const expenseService = new ExpenseService();
  
        await expenseService.getAllExpense(dataForm)
            .then(async (result) => {
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

  async getExpenseId(req, res) {
    try {
        let dataForm = req.body.token;
        const expenseService = new ExpenseService();
  
        await expenseService.GetIdExpense(dataForm)
            .then(async (result) => {
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

  async editExpenseId(req, res) {
    try {
        let dataForm = req.body.token;
        const expenseService = new ExpenseService();
  
        await expenseService.UpdateExpense(dataForm)
            .then(async (result) => {
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

  async deleteExpenseId(req, res) {
    try {
        let dataForm = req.body.token;
        const expenseService = new ExpenseService();
  
        await expenseService.DeleteExpense(dataForm)
            .then(async (result) => {
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

module.exports = new ExpenseController();