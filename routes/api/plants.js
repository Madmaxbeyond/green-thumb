const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/plants
router.post('/', plantsCtrl.create);

// Just to test the token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
