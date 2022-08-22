/*
1. How do we assign a value to a variable?
   By either using a let, var, or const.

2. How do we change the value of a variable
   redecalre variable and change value

3. How do we assign an existing variable to new variable?
   change the variable name

4. Remind me, what are declare, assign, and define?
   Creating a variable is declaring
   assigning is giving a value to a variable
   define.

5. What is psuedocoding and why should you do it?
   Psuedocode is an artificial and informal language that helps programmers develop algorithims.
   you should do it cause it helps gives you a text based understanding of code before you write it

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
   70%,
*/
//B
let firstVariable = 'Hello World';
firstVariable = 12;

let secondVariable = firstVariable;
secondVariable = 'Hello World, I"m tired';

console.log(firstVariable)

let yourName= "Rasheem"

console.log ('Hello my name is ' + yourName);


//C

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin'

console.log(a < b);
console.log(c > d);
console.log('Name'=== 'Name')
//FOR THE NEXT TWO, USE ONLY && OR ||

console.log(true || false)
console.log(false && false && false && false && false || true);
console.log(false >= false);
console.log(e ==='Kevin');
console.log(a != b != c);
console.log(a === a != d);
console.log(48 =='48');

//D The Farm

let animal = 'Tiger'
let sound =''
if (animal === 'Cow'){
    sound = "Moo"
}
else {
    sound ="Hey! You're not a cow"
}

console.log(sound);

//E 
let age= 17
let resp =''
if (age >= 16 ){
    resp = "Here are the keys!";

}
else{
    return "Sorry, you're too young"

}

console.log(resp);
//PUSH

//Loops
 
 for (let i = 0; i <= 10; i++){
     
     console.log(i)
 }


 for (let i = 10; i <= 400; i++){
     
     console.log(i);
 }

 for (let i = 12; i <= 4000; i+=3){
     
     console.log(i)
 }

 // Get Even

 for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log( [i] +  " <-- is an even number");
    } else {
        
    }
}

// Give me Five

for (let i = 0; i <= 100; i++) {
        if (i === 0) {
            
        }
        if (i % 3 === 0) {
            if (i % 5 === 0 ) {
                console.log('I found a ' + [i] + ' Three is a crowd but High Five!');
                
                
            }
            else {
               console.log('I found a ' + [i] + ' Three is a crowd ');
            }
            
        }
           else if (i % 5 === 0) {
               console.log('I found a '+ [i] + ' High Five');
           } 
            
    
      
}

// D. Savings Account
//sum = number of integers(first integer + last integer)/2
// sum =(n *(n + 1))/2 
function bank_Acccount() {
        let sum = 0;
        for (let i = 1; i <= 10; i++) {
            sum += i;
        }
        return sum;
    }
console.log(bank_Acccount());
    
    
    function bank_account() {
        let sum = 0;
           for (let i = 1; i <= 100; i++) {
               sum += i;
        }
           return sum * 2;
    }
console.log(bank_account());

// Arrays and Control Flows

/* 1. Things in arrays are called elements
   2. Yes, elements in arrays are ordered started from 0
   3. One real life thing you can model with an array is a grocery shopping list.

*/

let quotes = ['If you help one you help all', "Today is the oldest you've been and the youngest you'll ever be again", "You miss 100% of the shots you don't take" ]


    
/* const randomThings = [1, 10, 'Hello', true]
   randomThings[0];
   randomThings[2]= 'World';
   console.log(randomThings);
*/


const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[3];
ourClass[4]= "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);

const myArray= [5,10,500,20]
myArray.push("Aegon");
myArray.shift();
myArray.unshift('Bob Marley');
myArray.splice(3);
myArray.reverse();
console.log(myArray);
/* Mutate means to change the original structure and we did so by invoking the reverse method on the array, the reverse method returned the array backwards
*/

// Biggie Smalls

let num = 76
if (num < 100){
    console.log("Smalls");


} else{
    console.log("Biggie")
}


// Monkey in the Middle

let numOfMonkey= 7
if (numOfMonkey < 5 ){
    console.log("little number");

    
}
   else if(numOfMonkey > 10){
    console.log("big number")
   }
     else{
        console.log("monkey")
     }
  

// What's in Your Closet?

//  console.log('Kristyn is rocking that ' + kristynsCloset[2] + 'today!');
//  kirstynsCloset.splice(6, 0, 'raybans');
// kirstynsCloset[5] = 'stained knit hat';
// thomsCloset[0][0];
//  thomsCloset[0][3];
//  thomsCloset[1][2];
// console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + ', ' + thomsCloset[0][1] + ' and ' + thomsCloset[2][1] + '!');
// thomsCloset[1][2] = 'Footie Pajamas';
  

//Functions


function printGreeting (name){
     return "Hello there, " + name + "!";
}
console.log(printGreeting("Rasheem"));



function printCool (name){
    return name + " is super cool!";
}
console.log(printCool('Akili'));



function calculateCube(num){
    return num * num * num 
}
console.log(calculateCube(5));



function isVowel(char){
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char =='u'){
        return true
        
    } 
    else {
        return false
    }
    
}
console.log(isVowel('c'));



function getTwoLenghts(str1, str2){
    let Arr =[str1.length, str2.length]
    return Arr;
    
}
console.log(getTwoLenghts("Mighty", "Pneumonoultramicroscopicsilicovolcanoconiosis"));



function getMultipleLenghts(arrStr){
    let length = [];
    for (let i = 0; i < arrStr.length; i++){
        length.push(arrStr[i].length)
    }
       return length
}
console.log(getMultipleLenghts(['Hello', 'You', 'Are', 'My', 'Sworn', 'Enemy']));



function maxOfThree(var1, var2, var3){
    if (var1 >= var2) {
         if (var1 >= var3) {
                 return var1;
        } else {
                return var3;
                }
            } else {
                if (var2 >= var3) {
                    return var2;
                } else {
                    return var3;
                }
            }
    
}
console.log(maxOfThree(12,10,27));

function printLongestWord (strArr) {
    let longest = strArr[0];
    for (let i = 1; i < strArr.length; i++) {
        if (longest.length == strArr[i].length) {
            
        } else if (longest.length < strArr[i].length) {
            longest = strArr[i];
        }
    }
    return longest;
}
console.log(printLongestWord(['BoJack', 'Princess', 'Diane', 'a', 'Max', 'Peanutbutter', 'big']));


// Objects

let user = {
    name: 'Rasheem',
    age: 25,
    email: 'rasheem.khan94@gmail.com',
    purchased:[]

}

user.email= 'Akili123@gmail.com';
user.age++;
user.location = 'New York City';
user.purchased.push('carbohydrates');
user.purchased.push('Peace of Mind');
user.purchased.push('Merino jodhpurs');
console.log(user.purchased[2]);


user.friend = {
    name: 'Grace Hopper',
    age: 85,
    location: 'New Jersey',
    purchased:[]
}
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push('The One Ring');
user.friend.purchased.push('A latte');
console.log(user.friend.purchased[1]);

for(i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i]);
}

for(j = 0; j < user.friend.purchased.length; j++){
    console.log(user.friend.purchased[j]);
}

function updateUser(){
    user.age++;
   user.name = user.name.toUpperCase();
}
console.log(user);

function oldAndLoud(person){
    person.age++;
    person.name = person.name.toUpperCase();
}
oldAndLoud(user);
console.log(user);

//Cat Combinator 
 cat1 = {
    name: 'Nel',
    breed: 'Norwegian House Cat',
    age: 4
}
console.log(cat1.age);
console.log(cat1.breed);


let cat2 = {
    name: 'Terry',
    breed: 'Toyger',
    age: 6
}


function combineCats(mama, papa){
    let Kitty = {
        name: mama.name + papa.name,
        age: 1,
        breed: mama.breed + '-' + papa.breed
    }
    return Kitty;
}
console.log(combineCats(cat1, cat2));
console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));