const VehiculeService = require('../services/vehicule.services');
const errors = require('../utils/errors');

class VehiculeController {
  async newVehicule(req, res) {
    try {
        let dataForm = req.body;
        const vehiculeService = new VehiculeService();
  
        await vehiculeService.CreateVehicule(dataForm.plate, dataForm.make, dataForm.model, dataForm.year, dataForm.userId)
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

  async getAllVehicules(req, res) {
    try {
        let dataForm = req.params;
        const vehiculeService = new VehiculeService();
  
        await vehiculeService.getAllVehicule(dataForm.userId)
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

  async getVehiculeId(req, res) {
    try {
        let dataForm = req.params;
        const vehiculeService = new VehiculeService();
  
        await vehiculeService.GetIdVehicule(dataForm.id)
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

  async editVehiculeId(req, res) {
    try {
        let dataForm = req.body;
        const vehiculeService = new VehiculeService();
  
        await vehiculeService.UpdateVehicule(dataForm.plate, dataForm.make, dataForm.model, dataForm.year)
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

  async deleteVehiculeId(req, res) {
    try {
        let dataForm = req.body;
        const vehiculeService = new VehiculeService();
  
        await vehiculeService.DeleteVehicule(dataForm.id)
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

module.exports = new VehiculeController();