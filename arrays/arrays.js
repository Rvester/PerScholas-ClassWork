// Arrays




//PUSH method adds to the end of array

 //learners.push("4")
 //learners.push(false)
 //learners.push(1000)
 //console.log(learners)
 
 //Pop Method (removes from the end of array)
 //let removedValue = learners.pop()

 //Shift Method (removes beginning of an array)
 //let removedShiftValue = learners.shift()

 //UNSHIFT method (adds to beginning of array)
//learners.unshift ("Usman")

//console.log(removedShiftValue)

//indexes:
//let learners =["Kristy", "Nathan","Ronald"]
//let Instructors = ["Jade", "Rixio", "Teo"]

//spread operator essentially copy paste everything in the other arrays using ...


//let everybody =[...learners, ...Instructors]

//console.log(everybody)


//rest parameters

//function add(...numbers){
    //console.log(numbers);
    //another way to write an array    
    //for(let i=0; i < numbers.length; i++){
    //}
//}
    //add(4,5,6,10,100,50);

    //function max(a,b) {
        //if(a > b){
            //return a;
        //}
            //else{
                //return b;

            //}
          
          
    //}
     //console.log(max(30,68))


     
     //function max3(...numbers){
        //if ( 12 < 26 < 42){
            //return 42;
            
        //}
        //else{
            //return "nothing";
        //}
    //}
    
    //console.log(max3(12,26,42))
    
    //let vowels= ["a", "e", "i", "o", "u","l"]
        //function letter(...vowels){
            //if(vowels === letter){

           // return true;
             
                

            //}
            
               // else
                 // return false;
       // }
                //console.log(letter(...vowels))

    
    let sumArray= function (arr){

        let sum = 0;
         for(let i=0; i < arr.length; i++){
            sum += arr[i];
        }
            return sum;
    }
                
    console.log(sumArray([12,34,55,46,10,12]))



    let multiplyArray = function(arr){
        sum = 1; 
        for( let i = 0; i < arr.length; i++){
            sum = sum * arr[i];

        }
        return sum;

    }
        console.log(multiplyArray([2,5,6]))

    let numArgs = function(...args){        
    for(let i=0; i <args.length; i++){
        
    }
        
    
    console.log(numArgs([1,2,3,4,5]))
}

                


    
    