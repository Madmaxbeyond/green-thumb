const express = require('express');
const router = express.Router();
const plantsCtrl = require('../../controllers/api/plants');

const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/plants
router.get('/', ensureLoggedIn, plantsCtrl.getAll);
// POST /api/plants
router.post('/', ensureLoggedIn, plantsCtrl.create);
// GET /api/plants/:id
router.get('/:id', ensureLoggedIn, plantsCtrl.show);
// PUT /api/plants/:id
router.put('/:id', plantsCtrl.update);
// DELETE /api/plants/:id
router.delete('/:id', plantsCtrl.delete);

module.exports = router;
