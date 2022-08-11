// inside parenthesis we have 
// three statements:

//statement 1:
// declare and initilize a variable
//scoped to the for loop

//statement 2:
// a condition that when true runs
// the code for the loop

//statement 3:
//incrementing of the variable in
// order to eventually break the loop


//1: declare and initialize variable
//2: check if condition is true
// 3: console log runs and prints 0
//4: the variable i increments and becomes 1

 //5: repeat step 2
 //6: repeat step 3
// 7: repeat step 4
 //8 check if condition is true (its not)
 //9: exit loop, continue with rest of code

for(let i=10; i > 0; i--){

    console.log(i);
}
    

for (let c=6; c <= 60; c+=3){
    console.log(c);

}



for (let j=1; j < 8; j++) {
    console.log("#".repeat(j));
  }

  for (x=0; x <= 10; x++){
    if (x%2 ==0){
        console.log((x));
    
        }

  
  }


  for(let number=2 ; number<=20; number++){
    let Prime = true;

for (let i=2; i<= number-1;i++){
    if(number%i===0){
        Prime = false;
        
    }
}
if (Prime) console.log(number);
if (Prime) console.log("prime");



  }

  for(let k=0; k<=20; k++) {
    if (k<10 && k%2!=0) {
        console.log(k);
    }
    if (k>10 && k%2==0) {
        console.log(k-10);
    }
}

let m = 0;
while(m <35){
    if(m%3 ==0){
       console.log(m); 
    }
    m++;
}
    

    



