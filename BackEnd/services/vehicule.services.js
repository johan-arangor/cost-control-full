class VehiculeServices {
    async ValidateVehicule(vehicule) {
        return new Promise(async (resolve) => {
            resolve('vehicule exist');
        });
    }

    async GetIdVehicule(vehicule) {
        return new Promise(async (resolve) => {
            resolve('vehicule get id');
        });
    }

    async GetAllVehicule(vehicule) {
        return new Promise(async (resolve) => {
            resolve('vehicule get all');
        });
    }

    async CreateVehicule(vehicule) {
        return new Promise(async (resolve) => {
            resolve('vehicule create');
        });
    }

    async UpdateVehicule(vehicule) {
        return new Promise(async (resolve) => {
            resolve('vehicule update');
        });
    }

    async DeleteVehicule(vehicule) {
        return new Promise(async (resolve) => {
            resolve('vehicule delete');
        });
    }
}

module.exports = VehiculeServices;