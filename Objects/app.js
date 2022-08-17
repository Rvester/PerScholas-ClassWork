//object literal
//let obj ={}

//let cat = {
    //name : 'Mr Bean',
    //fur : 'grey, black, and white',
    //legs: 4,
    //age: 3,
    //favariteThings:['knocking things over','food', 'yarn'],
    //canSpeakFrench: false,
//}
// access property with dot notation
//console.log(cat.name)
//same as array.length
//arayys are initiliazed with []. objects are initialized with {}

//we can also access properties with brackets
//console.log(cat['name'])
 //console.log(cat['fur'])
 //console.log(cat['legs'])
//you can change the property of a code using the same syntax in Objects
//for..of is for arrays

//for...in is for objects

//for (let key in cat){
    //key represents everything inside the nest
    //console.log('key: ', key)
    //key is a string value
    //console.log('value: ', cat[key])// gives us the value 
//}

// let fightingGame = {
//     shotoChar: ['Brandon', 'Teo', 'Lucas'],
//     bestMoves: ['DP', 'Tatsu', 'Raging Demon'], 
//     finalBoss: ['Jade' , 'Rixio'],
//     shotoBeatingFinalBoss: function(){
//         console.log('They have been defeated but Teo was lost in battle')
//     }


// }
//     console.log(fightingGame.shotoChar)
//     console.log(fightingGame.bestMoves[2])
//     console.log(fightingGame.finalBoss)
//     fightingGame.shotoBeatingFinalBoss()

// for(let key in fightingGame){
//     console.log('fundamentals: ', key)

// }


// function count(str){
//     let obj={};
//     for(let i=0; i < str.length; i++){
        
//         let char= str[i];
//          if(obj[char]) {
//             obj[char] ++;

//         }
//          else {
//             obj[char] =1;
//          }
//     }
//         return obj;
// }
//   console.log(count("Mississippi"));


// 27.83
// 100 (27.83 left)
// 50 (27.83 left)
// 20 (7.83 left)
//  5 (2.83 left)
//  1 (1.83 left)
//  1 (0.83 left)


/**
 * Gets the amount of change that can be returned using a bill for some amount
 */
function getChange (amount, bill) {
    let change = amount / bill; 
    return change;
}

function changeReturned(amount) {
    let bills = [100, 50, 20, 10 , 5 , 1 ];
    let obj = {};
// for...of loop starts at 100, check if possible to make change,then 50,check if its possible to continue to make change...
    for (let bill of bills) {

        // Get change made from target bill
        let change = getChange(amount, bill);

        // If it's possible to make change
        //     - Store change in output
        //     - Subtract change from total amount
        if (change >= 1) {

            // use floor here to get the whole number of bills used to make change
            let numBills = Math.floor(change);

            // Store number of change in output here
            obj[bill] = numBills;

            // Subtract change from total amount here
            amount -= bill * numBills;
        }
    }

    return obj;

}

let outputChange = changeReturned(100-27.83);
console.log(outputChange);