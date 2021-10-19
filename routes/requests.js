const express = require('express')
const router = express.Router()
const controller = require('../controllers/requests.controller')

router.get('/directory', controller.default);
router.post('/directory', controller.default);

module.exports = router;