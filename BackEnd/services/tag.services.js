class TagServices {
    async ValidateTag(tag) {
        return new Promise(async (resolve) => {
            resolve('tag exist');
        });
    }

    async GetIdTag(tag) {
        return new Promise(async (resolve) => {
            resolve('tag get id');
        });
    }

    async GetAllTag(tag) {
        return new Promise(async (resolve) => {
            resolve('tag get all');
        });
    }

    async CreateTag(tag) {
        return new Promise(async (resolve) => {
            resolve('tag create');
        });
    }

    async UpdateTag(tag) {
        return new Promise(async (resolve) => {
            resolve('tag update');
        });
    }

    async DeleteTag(tag) {
        return new Promise(async (resolve) => {
            resolve('tag delete');
        });
    }
}

module.exports = TagServices;