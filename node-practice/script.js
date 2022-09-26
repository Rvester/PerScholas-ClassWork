// const multiply = (a,b) => a * b;

// console.log (multiply(5,5));

// const fs = require('fs');
// console.log(typeof fs);

// fs.writeFile('./hello.txt', 'Hello!', function(){
//     console.log('done creating file');
// });

// Load the "days-of-the-week" module
// require returns the value from module.exports
// let daysOfWeek = require('./days-of-the-week')

//  console.log(daysOfWeek)

// let day = daysOfWeek.getWeekday(0);
// console.log(day);
// let request = require('request')

// request('http://jsonplaceholder.typicode.com/users', (err, res, body) =>{
//     console.log(body)
// })
// let school = "Per Scholas"

// let weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

// function getWeekday(dayNo) {
//     if (dayNo < 0 || dayNo > 6) dayNo = 0;
//     return this.weekdays[dayNo];
// };

// module.exports = {
//     school,
//     weekdays,
//     getWeekday
// }

let random = require('./utilities/random')
    for (let i = 0; i < 10; i++) {
       console.log( random(100, 200) );
   }


   const circle = require('./utilities/circle');
   console.log( circle.area(50) );  // 7853.98...
   console.log( circle.circumference(75) );  // 471.23..
   






