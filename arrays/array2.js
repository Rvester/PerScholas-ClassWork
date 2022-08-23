//map
//filter
//forEach



const nums = [1,2,3,4,5,6,7,8,9,10,0]
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'Dog']

//array methods take a callback function as an argument
// callbacks are functions that will run at a later time
// example of a forEach array method: nums.forEach()

//every method 
//let test = nums.every(myCallBack) // - > returns either true or either false

//creating our very own callback function!

// function myCallBack(element){
//    if(element >= 0){
//     return true;
//    }else{
//     return false;
//    }
// }
// retrun elements >= 0

//MDN Docs example of a callback

//const isBelowThreshold = (currentValue) => currentValue < 40;
//same thing as...
//function isBelowThreshold(currentValue){
//    return currentValue < 40
//}


/* function myNewCallback(element){
    if (element.length < 8){
        return true
    }else{
        return false
    }
}
*/

//let test2 = panagram.every((element) => {
   // return element.length < 8
//})

//arrow function is the same as the top function

let num = nums.filter((element) => element < 4);
console.log(num)

let arr = panagram.filter((element) => element.length % 2 == 0);
console.log(arr)

// find array method...

let find = nums.find((element) => element % 5 == 0);
console.log(find);

let findWrd = panagram.find((element) => element.length >= 5);
console.log(findWrd);

//Find Index

let findNum = nums.findIndex((element) => element % 3 == 0)
console.log(findNum)

let findWrd2 = panagram.findIndex((element) => element.length <= 2);
console.log(findWrd2);

//For Each
nums.forEach((element) => console.log(element * 3))

panagram.forEach((element) => console.log(element + '!'))


//Map
nums.map((x) => console.log(x * 100))

panagram.map((wrd) => console.log(wrd.toUpperCase()))


//Some

nums.some((element) => console.log(element % 7 == 0))

panagram.some((maybe) => console.log(maybe.includes('a') ))






