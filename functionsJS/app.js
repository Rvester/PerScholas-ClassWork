


function add(){
    return 2 + 3;
}

console.log(add())

function add(num1, num2){
    return num1 + num2
}

console.log (add(2,3));
console.log(add(50,40));
console.log(add(3000,2500));
console.log (add(432435,133242));


function computeArea(length,width){
    return "The area of rectangle width is "  + width +  " and the length of is "  + length +  " which is "  + length * width +  " sq units"

}
console.log(computeArea(12,4));


function PlanetHasWater(planet){
    if ( planet == "Earth" || planet == "Mars"){
        
        return "true" 
    }
else{
    return "false"
}
}

console.log(PlanetHasWater("Jupiter"))
console.log(PlanetHasWater("Saturn"))
console.log(PlanetHasWater("Mars"))
