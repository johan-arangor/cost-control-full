const express = require('express');
const router = express.Router();
const VehiculeController = require('../controllers/vehicule.controller');

router.post("/vehicule", VehiculeController.newVehicule);
router.get("/vehicule/", VehiculeController.getAllVehicules);
router.get("/vehicule/:id", VehiculeController.getVehiculeId);
router.put("/vehicule/:id", VehiculeController.editVehiculeId);
router.delete("/vehicule/:id", VehiculeController.deleteVehiculeId);

module.exports = router;