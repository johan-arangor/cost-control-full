const { Tag } = require('../models/index');
const errors = require('../utils/errors');
const responses = require('../utils/responses');
const { v4: uuidv4 } = require('uuid');

class TagServices {
    async GetIdTag(tagId) {
        try {
            let result = await Tag.findOne(
                { where: { id: tagId}}
            );

            return responses.RESPONSE_DATA(true, {id: result.id, description: result.description, categoryId: result.categoryId});
        } catch (err) {
            throw errors.OPERATIOS_DB.ERROR(err.message);
        }
    }

    async GetAllTag(tagUserId) {
        try {
            let result = await Tag.findAll(
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

    async CreateTag(description, categoryId) {
        try {
            await Tag.create({
                id: uuidv4(),
                description: description,
                categoryId: categoryId
            });

            return responses.CREATE_DINAMIC('tag');
        } catch (err) {
            throw errors.OPERATIOS_DB.ERROR(err.message);
        }
    }

    async UpdateTag(tagId, newDescription, newCategoryId) {
        try{
            await Tag.update(
                { 
                    description: newDescription,
                    categoryId: newCategoryId 
                },
                { where: { id: tagId}}
            );

            return responses.UPDATE_DINAMIC('tag');
        } catch (err) {
            throw errors.OPERATIOS_DB.ERROR(err.message);
        }
    }

    async DeleteTag(tagId) {
        try {
            await Tag.destroy(
                { where: { id: tagId}}
            );

            return responses.DELETE_DINAMIC('tag');
        } catch (err) {
            throw errors.OPERATIOS_DB.ERROR(err.message);
        }
    }
}

module.exports = TagServices;