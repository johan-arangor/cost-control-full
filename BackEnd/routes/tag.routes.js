const express = require('express');
const router = express.Router();
const TagController = require('../controllers/tag.controller');

router.post("/tag", TagController.newTag);
router.get("/tag/", TagController.getAllTags);
router.get("/tag/:id", TagController.getTagId);
router.put("/tag/:id", TagController.editTagId);
router.delete("/tag/:id", TagController.deleteTagId);

module.exports = router;