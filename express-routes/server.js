// Load Express
const express = require('express');
//bring in our packaged routes
const fruitRoutes = require('./routes/fruitRoutes')
const meatRoutes = require('./routes/meatRoutes')
const vegRoutes = require('./routes/vegRoutes')

//create our express app
const app = express();

//Middleware
 app.use('/api/fruits', fruitRoutes)
 app.use('/api/meats', meatRoutes);
 app.use('/api/vegetables', vegRoutes);


    // app.get('/', (req, res) => {
    //     quality = req.query.quality;
    //     if (quality == 'good'){
    //         yes = fruits.filter(fruit => fruit.readyToEat === true)
    //         res.send(yes)
    //     } else if (quality == 'bad'){
    //         no = fruits.filter(fruit => fruit.readyToEat === false)
    //         res.send(no)
    //     } else{
    //         res.send(fruits)
    //     }
    // })






// Listen to port
app.listen(3000, () => {
    console.log('Listening on port: ', 3000)
})