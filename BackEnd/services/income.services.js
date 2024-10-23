const { Income } = require('../models/index');
const errors = require('../utils/errors');
const responses = require('../utils/responses');
const { v4: uuidv4 } = require('uuid');
const moment = require("moment/moment");

class IncomeServices {
    async GetIdIncome(incomeId) {
        try {
            let result = await Income.findOne(
                { where: { id: incomeId}}
            );

            return responses.RESPONSE_DATA(true, result);
        } catch (err) {
            throw errors.OPERATIOS_DB.ERROR(err.message);
        }
    }

    async GetAllIncome(tagUserId) {
        try {
            let result = await Income.findAll(
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

    async CreateIncome(description, amount, userId, tags, vehiculeId, creditId) {
        try {
            await Income.create({
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

    async UpdateIncome(description, amount, userId, tags, vehiculeId, creditId) {
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

    async DeleteIncome(incomeId) {
        try {
            await Income.destroy(
                { where: { id: incomeId}}
            );

            return responses.DELETE_DINAMIC('tag');
        } catch (err) {
            throw errors.OPERATIOS_DB.ERROR(err.message);
        }
    }
}

module.exports = IncomeServices;