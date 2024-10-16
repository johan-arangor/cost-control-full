class IncomeServices {
    async ValidateIncome(income) {
        return new Promise(async (resolve) => {
            resolve('income exist');
        });
    }

    async GetIdIncome(income) {
        return new Promise(async (resolve) => {
            resolve('income get id');
        });
    }

    async GetAllIncome(income) {
        return new Promise(async (resolve) => {
            resolve('income get all');
        });
    }

    async CreateIncome(income) {
        return new Promise(async (resolve) => {
            resolve('income create');
        });
    }

    async UpdateIncome(income) {
        return new Promise(async (resolve) => {
            resolve('income update');
        });
    }

    async DeleteIncome(income) {
        return new Promise(async (resolve) => {
            resolve('income delete');
        });
    }
}

module.exports = IncomeServices;