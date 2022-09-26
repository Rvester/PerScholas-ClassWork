// Load express
const express = require('express')

// create the app
const app = express()
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

// define routes (when ready)
app.get('/hello', (req,res) => {
    res.send(`<h1>Plants are Awesome!</h1>
    <img src ="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg">` )
})
app.get('/:index', (req,res) => {
    if (plants[req.params.index]){
        res.send(plants[req.params.index])

    }else{
        res.send('cannot find anything at this index')
    }
})

//Example with Multiple Params
app.get('/hello:firstname', (req,res) =>{
    
})

//Example with req.query
app.get('/howdy:firstname', (req,res) => {
    console.log(req.params, ':parameters')
    console.log(req.query, ':queries')
    res.send('testing')
})



// Listen to port 3000
app.listen(3000, () => {
    console.log('listenng on port', 3000);
})
