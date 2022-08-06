const express = require('express')
const router = express.Router();
const {getPayment}  = require('../controllers/transact')







router.post('/payment', getPayment);



module.exports = router;