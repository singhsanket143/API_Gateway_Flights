const express = require('express');
const { UserController } = require('../../controllers');

const router = express.Router();

router.post('/', UserController.signup);

module.exports = router;