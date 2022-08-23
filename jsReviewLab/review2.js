//Arrays, Loops, and Conditional Reps

//Easy Going

//for (let i =0; i <= 20; i++){
    //console.log(i);
//}

//Get Even
// for (let i = 0; i <= 200; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

//FizzBuzz
// for (let i = 0; i <= 100; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//          console.log('FizzBuzz');
       
//         }
            
//     else if (i % 3 === 0){
//         console.log('Fizz');
//     }
//     else if (i % 5 === 0){
//         console.log('Buzz');
//     } 
//     else{
//         console.log(i);
//     }

// }

//Wild Wild
const wolfy = ["Wolfy", "wolf", 16 ,"Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant", 5000, "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-to"]
const dart = ["D'art", "Demogorgan Dog", 2, "Upside Down"]

plantee[2]++;
wolfy[3] = 'Gotham City';
dart.push('Hawkins');
wolfy.shift();
wolfy.unshift('Gameboy');



//Yell at the Ninja Turtles

let ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michealangelo']
 for (let value of ninjaTurtles){
      
      console.log(value.toUpperCase());

 }

 const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']

console.log(favMovies[8]);
favMovies.sort();
favMovies.pop();
favMovies.push('Guardian\'s of the Galaxy');
favMovies.reverse();
favMovies.shift();
favMovies.unshift();//unshifts inserts a new element in the beginning of the array, this isn't returning anything since there are no parameters
favMovies.splice(favMovies.indexOf('Django'), 1, 'Avatar');

let lastHalf = favMovies.slice(Math.ceil(favMovies.length / 2));
// Yes, it permanently altered the array
console.log(lastHalf);


//Where is Waldo

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                     ["Lucinda", "Jacc", "Neff", "Snoop"],
                     ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1);
whereIsWaldo[1][2] = 'No One';

//Excited Kitten

let phrases = [
    ' ...human...why are you taking pictures of me?',
    ' ...the catnip made me do it',
    ' ...why does the red dot always get away?'
]

let randomNum = Math.floor(Math.random() * phrases.length);

for (let i = 0; i < 20; i++){
    if(i % 2 === 0){
        console.log(phrases[randomNum]);
    }
    console.log('love me , pet me! hssssss!');
}

//Find the Median

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
middleIndex = Math.floor(nums.length / 2)
console.log(nums[middleIndex])

//Return of the Closets
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    'right sock',
    "GA hoodie",
    "green pants",
    "yello knit hat",
    "marshmallow peeps"
];

//thom's closet is more complicated
const thomsCloset = [
    [
        //shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up"
    ], [
        //pants
        'grey jeans',
        'jeans',
        'PJs'
    ],[
        //accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

let kristynsShoe = kristynsCloset.shift()
thomsCloset[2].push(kristynsShoe)

kristynsCloset.splice(6, 0, 'raybans');
kristynsCloset[5] = 'stained knit hat';
thomsCloset[0][0];
 thomsCloset[0][3];
 thomsCloset[1][2];








//Dirty Laundry

for(let i of kristynsCloset){
    console.log('WHIRR: Now washing ' + i);
}

console.log(thomsCloset[0])
console.log(thomsCloset[1])
console.log(thomsCloset[2])

for(let i of thomsCloset){
    console.log(i)
}

