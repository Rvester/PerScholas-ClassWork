const express = require('express')

const veg = require('../models/vegetables')

const router = express.Router();





router.get('/', (req, res) => {
    res.send(veg)
});


router.get('/:index', (req, res) => {
   res.send(veg[req.params.index])
}) 



module.exports = router