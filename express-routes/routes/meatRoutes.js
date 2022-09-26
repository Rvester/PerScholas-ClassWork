const express = require('express')

const meat = require('../models/meats')

const router = express.Router();


router.get('/', (req, res) => {
    console.log(req.params)
    res.send(meat)
});


router.get('/:index', (req, res) => {
   res.send(veg[req.params.index])
}) 


module.exports = router