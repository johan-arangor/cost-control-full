const express = require('express');
const router = express.Router();
const TagController = require('../controllers/tag.controller');

router.post("/tag", TagController.newTag);
router.get("/tagAll/:userId", TagController.getAllTags);
router.get("/tag/:id", TagController.getTagId);
router.put("/tag", TagController.editTagId);
router.delete("/tag", TagController.deleteTagId);

module.exports = router;