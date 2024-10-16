class ExpenseServices {
    async ValidateExpense(expense) {
        return new Promise(async (resolve) => {
            resolve('expense exist');
        });
    }

    async GetIdExpense(expense) {
        return new Promise(async (resolve) => {
            resolve('expense get id');
        });
    }

    async GetAllExpense(expense) {
        return new Promise(async (resolve) => {
            resolve('expense get all');
        });
    }

    async CreateExpense(expense) {
        return new Promise(async (resolve) => {
            resolve('expense create');
        });
    }

    async UpdateExpense(expense) {
        return new Promise(async (resolve) => {
            resolve('expense update');
        });
    }

    async DeleteExpense(expense) {
        return new Promise(async (resolve) => {
            resolve('expense delete');
        });
    }
}

module.exports = ExpenseServices;