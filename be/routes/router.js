const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/get', controller.read);
router.post('/create', controller.create);
router.put('/update', controller.update);
router.delete('/delete', controller.deleteOne);

module.exports = router;