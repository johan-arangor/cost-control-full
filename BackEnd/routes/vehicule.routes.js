const express = require('express');
const router = express.Router();
const VehiculeController = require('../controllers/vehicule.controller');

router.post("/vehicule", VehiculeController.newVehicule);
router.get("/vehiculeAll/:userId", VehiculeController.getAllVehicules);
router.get("/vehicule/:id", VehiculeController.getVehiculeId);
router.put("/vehicule", VehiculeController.editVehiculeId);
router.delete("/vehicule", VehiculeController.deleteVehiculeId);

module.exports = router;