// class Vehicle{
//     //vin:
//     //make:
//     constructor(vin,make, model){
//         this.vin = vin;
//         this.make = make;
//         this.model = model;
//         this.running = false;
//         console.log('creating a new instance of vehicle')
//     }
//     goVroom(){
//         console.log('I am speed!')
//     }
//     Start(){
//         this.running = true;
//         console.log('running')
//     }
// }




// const audi = new Vehicle('WAUZZ8', 'A3 ', 'Sportsback' );
// const tesla = new Vehicle('X345QS','Tesla', 'Y' )

// audi.goVroom();
// tesla.goVroom();

// audi.Start();
// tesla.Start();

// console.log(audi,tesla);

// console.log(audi, tesla)
// let arr=[1,2,3]
// // arr.forEach()

// // let arr2 = new Array(1,2,3)

// // console.log(arr2)

// // arr2.forEach((x) => console.log(x))
// console.log(Math.random());


class Cat {
    constructor(name, breed, color){
        this.name = name
        this.breed= breed
        this.color= color
        console.log('This is my cat '+ this.name)

    }
    goMeow(){
        return 'ROAR'
    }

    newName(Viktor){
         this.name = Viktor
         return this.name
    }
    toString(){
        return 'This cat named ' + this.name + ' is a brave ' + this.breed + ' with a beautiful ' + this.color  + ' coating with a nasty attitude';
        
    }
    
    
    
    
}

const Shamlin = new Cat('Shamlin', 'Norwegian Forest Cat', ' orange and White');
const Dorito = new Cat('Dorito', 'Ragdoll cat' , 'Gray, White and Brown')

console.log(Shamlin.goMeow());
console.log(Shamlin.newName('Viktor'));
console.log(Shamlin.toString());
console.log(Dorito.goMeow());
console.log(Dorito.toString());


class Pirate {
    constructor(pirate, ship, bounty){

        this.pirate = pirate
        this.ship = ship
        this.bounty = bounty 
            console.log('My name is '+ this.name + ' and I"m gonna be the king of the pirates')
    }

}


class Governor{
    static politicalParty = 'Democrat';
    static age = 37;
    static greeting = 'Hello my citizens!';
    
    static law(){
        console.log('I will be passing new laws and legislations');
    }

    
}

console.log(Governor.age);
console.log(Governor.politicalParty);
console.log(Governor.greeting);
Governor.law();

class Person {
    constructor(name, age , hairColor){
        this.name=name;
        this.age = age;
        this.hairColor = hairColor
                console.log( ' I am a ' + this.name + ' and I help keep this community running');
    }
}
















