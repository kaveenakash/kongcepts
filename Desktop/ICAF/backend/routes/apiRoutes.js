const express = require('express')
const router = express.Router()

//Import Controller
const {sampleGetMethod,samplePostMethod} = require('../controllers/controller')
 

//sample get request
router.get('/sample-get',sampleGetMethod)
router.post('/sample-post',samplePostMethod)


module.exports = router