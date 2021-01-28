const express = require('express');
const router = express.Router();
const plantsCtrl = require('../../controllers/api/plants');


// GET /api/plants
router.get('/', plantsCtrl.index);
// POST /api/plants/add
router.post('/', plantsCtrl.create);
// GET /api/plants/:id
router.get('/:id', plantsCtrl.show);
// PUT /api/plants/:id
router.put('/:id', plantsCtrl.update);
// DELETE /api/plants/:id
router.delete('/:id', plantsCtrl.delete);

module.exports = router;
