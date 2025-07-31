const express = require("express");
const router = express.Router();
const dataController = require("./engineerData");
const viewController = require("./engineerViews");
const apiController = require("./engineerAPI");
// const apiController = require("./engineerAPI");

// Index
router.get('/', dataController.index, viewController.index);

// New
router.get('/new', viewController.newView);

// Delete
router.delete('/:id', dataController.destroy, viewController.redirectHome /* apiController.destroy */);

// Update
router.put('/:id', dataController.update, viewController.redirectShow /* apiController.update */);

// Create
router.post('/', dataController.create, viewController.redirectHome /* apiController.create */);

// Edit
router.get('/:id/edit', dataController.show, viewController.edit);

// Show
router.get('/:id', dataController.show, viewController.show);

// Export router
module.exports = router;
