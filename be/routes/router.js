const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const check = require('../middleware/fieldCheck');

router.post('/get', controller.read);
router.post('/create', check, controller.create);
router.patch('/update', check, controller.update);
router.delete('/delete', controller.deleteOne);

module.exports = router;