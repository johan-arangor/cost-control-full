const { Vehicule } = require('../models/index');
const errors = require('../utils/errors');
const responses = require('../utils/responses');
const { v4: uuidv4 } = require('uuid');

class VehiculeServices {
    async GetIdVehicule(vehiculeId) {
        try {
            let result = await Vehicule.findOne(
                { where: { id: vehiculeId}}
            );

            return responses.RESPONSE_DATA(true, {result});
        } catch (err) {
            throw errors.OPERATIOS_DB.ERROR(err.message);
        }
    }

    async GetAllVehicule(vehiculeUserId) {
        try {
            let result = await vehicule.findAll(
                { where: { userId: vehiculeUserId }}
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

    async CreateVehicule(plate, make, model, year, userId) {
        try {
            await Vehicule.create({
                id: uuidv4(),
                plate: plate,
                make: make,
                model: model,
                year: year,
                userId: userId
            });

            return responses.CREATE_DINAMIC('vehicule');
        } catch (err) {
            throw errors.OPERATIOS_DB.ERROR(err.message);
        }
    }

    async UpdateVehicule(plate, make, model, year) {
        try{
            await Vehicule.update(
                { 
                    plate: plate,
                    make: make,
                    model: model,
                    year: year
                },
                { where: { id: tagId}}
            );

            return responses.UPDATE_DINAMIC('vehicule');
        } catch (err) {
            throw errors.OPERATIOS_DB.ERROR(err.message);
        }
    }

    async DeleteVehicule(vehiculeId) {
        try {
            await Vehicule.destroy(
                { where: { id: vehiculeId}}
            );

            return responses.DELETE_DINAMIC('vehicule');
        } catch (err) {
            throw errors.OPERATIOS_DB.ERROR(err.message);
        }
    }
}

module.exports = VehiculeServices;