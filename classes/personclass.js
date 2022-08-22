class Hamster {
    constructor(name){
        this.owner = "";
        this.name = name;
        this.price = 15;
    }

    wheelRun() {
        console.log("squeek squeek")
    }

    getPrice() {
        return this.price
    }
}








class Person {
    constructor(name){
        this.name = name;
        this.age = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamter= [];
        this.bankAccount = 0;
    }
    getName(){
        this.name = 'Rasheem'
        return this.name
    }
    getAge(){
        this.name = 25
        return this.name
    }
    getWeight(){
        this.weight = 225
        return this.weight
    }
    greet(){
        console.log('Hey there my name is ' + this.name)
    }
    eat(){
        this.weight++
        this.mood++
    }
    exercise(){
        this.weight--
    }
    ageUp(){
        this.age++
        this.height++
        this.weight++
        this.mood--
        this.bankAccount += 10
    }
    buyHamster(hamster){
        this.hamster.push('Hamtaro')
        this.weight += 10
        this.bankAccount -= Hamster.getPrice()
    }
    
}


class Dinner{
    constructor(appetizer, entree, dessert){
        this.appetizer = appetizer,
        this.entree = entree,
        this.dsessert = dessert
    }
    

}

class Chef 
{
       constructor(name){
        this.name = name;
       }
       CreateDinner(){

       }
}

