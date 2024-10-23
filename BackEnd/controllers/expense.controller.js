const ExpenseService = require('../services/expense.services');
const errors = require('../utils/errors');

class ExpenseController {
  async newExpense(req, res) {
    try {
        let dataForm = req.body;
        const expenseService = new ExpenseService();
  
        await expenseService.CreateExpense(dataForm.description, dataForm.amount, dataForm.userId, dataForm.tags, dataForm.vehiculeId, dataForm.creditId)
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

  async getAllExpenses(req, res) {
    try {
        let dataForm = req.body.token;
        const expenseService = new ExpenseService();
  
        await expenseService.getAllExpense(dataForm.userId)
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

  async getExpenseId(req, res) {
    try {
        let dataForm = req.params;
        const expenseService = new ExpenseService();
  
        await expenseService.GetIdExpense(dataForm.id)
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

  async editExpenseId(req, res) {
    try {
        let dataForm = req.body.token;
        const expenseService = new ExpenseService();
  
        await expenseService.UpdateExpense(dataForm.description, dataForm.amount, dataForm.tags, dataForm.vehiculeId, dataForm.creditId)
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

  async deleteExpenseId(req, res) {
    try {
        let dataForm = req.body.token;
        const expenseService = new ExpenseService();
  
        await expenseService.DeleteExpense(dataForm.id)
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

module.exports = new ExpenseController();