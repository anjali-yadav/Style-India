const express = require('express');
const { authController } = require('../controllers/usersController');
const router = express.Router();

//post email and password auth
router.post('/login', authController);


module.exports = router;