const TagService = require('../services/tag.services');
const errors = require('../utils/errors');

class TagController {
  async newTag(req, res) {
    try {
        let dataForm = req.body.token;
        const tagService = new TagService();
  
        await tagService.CreateTag(dataForm)
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

  async getAllTags(req, res) {
    try {
        let dataForm = req.body.token;
        const tagService = new TagService();
  
        await tagService.getAllTag(dataForm)
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

  async getTagId(req, res) {
    try {
        let dataForm = req.body.token;
        const tagService = new TagService();
  
        await tagService.GetIdTag(dataForm)
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

  async editTagId(req, res) {
    try {
        let dataForm = req.body.token;
        const tagService = new TagService();
  
        await tagService.UpdateTag(dataForm)
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

  async deleteTagId(req, res) {
    try {
        let dataForm = req.body.token;
        const tagService = new TagService();
  
        await tagService.DeleteTag(dataForm)
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

module.exports = new TagController();