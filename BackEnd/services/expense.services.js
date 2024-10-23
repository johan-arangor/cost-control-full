const { Expense } = require('../models/index');
const errors = require('../utils/errors');
const responses = require('../utils/responses');
const { v4: uuidv4 } = require('uuid');
const moment = require("moment/moment");

class ExpenseServices {
    async GetIdExpense(expenseId) {
        try {
            let result = await Expense.findOne(
                { where: { id: expenseId}}
            );

            return responses.RESPONSE_DATA(true, result);
        } catch (err) {
            throw errors.OPERATIOS_DB.ERROR(err.message);
        }
    }

    async GetAllExpense(tagUserId) {
        try {
            let result = await Expense.findAll(
                { where: { userId: tagUserId }}
            );

            if (result != null) {
                return responses.RESPONSE_DATA(true, {result});
            } else {
                return errors.ERROR_NO_DATA;
            }
        } catch (err) {
            throw errors.OPERATIOS_DB.ERROR;
        }
    }

    async CreateExpense(description, amount, userId, tags, vehiculeId, creditId) {
        try {
            await Expense.create({
                id: uuidv4(),
                dateEntry: moment().format("YYYY-MM-DD"),
                description: description,
                amount: amount,
                userId: userId,
                tags: tags,
                vehiculeId: vehiculeId,
                creditId: creditId
            });

            return responses.CREATE_DINAMIC('exponse');
        } catch (err) {
            throw errors.OPERATIOS_DB.ERROR(err.message);
        }
    }

    async UpdateExpense(description, amount, userId, tags, vehiculeId, creditId) {
        try{
            await Tag.update(
                { 
                    id: uuidv4(),
                    dateEntry: moment().format("YYYY-MM-DD"),
                    description: description,
                    amount: amount,
                    userId: userId,
                    tags: tags,
                    vehiculeId: vehiculeId,
                    creditId: creditId
                },
                { where: { id: tagId}}
            );

            return responses.UPDATE_DINAMIC('tag');
        } catch (err) {
            throw errors.OPERATIOS_DB.ERROR(err.message);
        }
    }

    async DeleteExpense(expenseId) {
        try {
            await Expense.destroy(
                { where: { id: expenseId}}
            );

            return responses.DELETE_DINAMIC('tag');
        } catch (err) {
            throw errors.OPERATIOS_DB.ERROR(err.message);
        }
    }
}

module.exports = ExpenseServices;