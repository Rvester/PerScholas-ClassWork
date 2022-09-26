//Load Express
const express = require('express')
// Load our Fruit Data
const fruits = require('../models/fruits')
//Create a spacial router for our data
const router = express.Router();


   // Setup "root" routes
   router.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

// Setup "index" route
router.get('/', (req, res) => {
    console.log(req.params)
    res.send(fruits)
})
// Setup "new" route
router.get('/new', (req, res) => {
   res.send('<form>Create Photo</form>')
});

//Setup "Create" route
router.post('/', (req, res) => {
   res.send('Creating a new fruit!')
})

// Setup "show" route  
router.get('/:index', (req, res) => {
 
    console.log(req.params, ': parameters')
    console.log(req.query, ': queries') 
    res.send(fruits[req.params.index])
}) 
//Setup "edit" route

router.get('/:index/edit', (req, res) => {
    res.send('<form>Edit Fruit</form>')
});

//Setup "update" route
router.put('/:index', (req, res) => {
    res.send('Updating a new fruit!(in DB)')
})

//Setup "destroy" route
router.delete('/:index', (req, res) => {
    res.send('Deleting a fruit at index!')
}) 

module.exports = router