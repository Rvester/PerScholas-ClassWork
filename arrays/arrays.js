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

    function max(a,b) {
        if(a > b){
            return a;
        }
            else{
                return b;

            }
          
          
    }
     console.log(max(30,68))


     let numbers =[12,26,42]
     function max3(...numbers){
        if ( 12 < 26 < 42){
            return 42;
            
        }
        else{
            return "nothing";
        }
    }
    
    console.log(max3(12,26,42))
    
    let vowels= ["a", "e", "i", "o", "u","l"]
        function letter(...vowels){
            if(vowels === letter){

            return true;
             
                

            }
            
                else
                  return false;
        }
                console.log(letter(...vowels))
                


    
        