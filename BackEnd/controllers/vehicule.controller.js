const VehiculeService = require('../services/vehicule.services');
const errors = require('../utils/errors');

class VehiculeController {
  async newVehicule(req, res) {
    try {
        let dataForm = req.body.token;
        const vehiculeService = new VehiculeService();
  
        await vehiculeService.CreateVehicule(dataForm)
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

  async getAllVehicules(req, res) {
    try {
        let dataForm = req.body.token;
        const vehiculeService = new VehiculeService();
  
        await vehiculeService.getAllVehicule(dataForm)
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

  async getVehiculeId(req, res) {
    try {
        let dataForm = req.body.token;
        const vehiculeService = new VehiculeService();
  
        await vehiculeService.GetIdVehicule(dataForm)
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

  async editVehiculeId(req, res) {
    try {
        let dataForm = req.body.token;
        const vehiculeService = new VehiculeService();
  
        await vehiculeService.UpdateVehicule(dataForm)
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

  async deleteVehiculeId(req, res) {
    try {
        let dataForm = req.body.token;
        const vehiculeService = new VehiculeService();
  
        await vehiculeService.DeleteVehicule(dataForm)
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

module.exports = new VehiculeController();