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
PUSH 

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






