// Load Express
const express = require('express');


//Create our express app
const app = express();

const arr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]



app.get('/greeting/:name', (req, res) => {
    res.send(`<h1>WoW! Hello there, ${req.params.name}</h1>`)
})

app.get('/tip/:total/:tipPercantage', (req, res) => {
    res.send(`<h1>Your tip is $${req.params.total * (req.params.tipPercantage / 100)} </h1>`)


})

app.get('/magic/:question', (req,res) =>{
 let random = arr[Math.floor(Math.random() * arr.length)];
  res.send(`${req.params.question} <h1>${random}</h1>`)
})





app.listen(3000, function(){
    console.log('Initiating port', 3000)
})