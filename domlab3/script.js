let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];


  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    let randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;

    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
   let title = document.querySelector('#main-title');
   title.innerHTML = '<h1>Family</h1>'
  
  
    // Part 2
   let newBody = document.querySelector('body');
   newBody.style.backgroundColor = '#DAA520';
  
    // Part 3
    let element = document.querySelector('#favorite-things');
     element.removeChild(element.lastElementChild);
    // Part 4
    let special = document.querySelectorAll('.special-title');
    
    for (i = 0; i < special.length ; i++){
        special[i].style.fontSize = '2rem';
    }
  
    
    

    // Part 5
let removeRace = document.querySelector('#past-races')
removeRace.removeChild(removeRace.children[3])
        
     
  
  
    // Part 6
  let newList = document.querySelector('#past-races');
   newList.appendChild(document.createTextNode('New York City'))
   
    // Part 7

     let newDiv = document.createElement('div');
     newDiv.classList.add('blog-post');
     let newh2 = document.createElement('h2');
     let newPara = document.createElement('p');
     newh2.innerHTML = 'New York City';
     newPara.innerHTML = 'THERE\'S ALWAYS ROOM FOR FAMILY';
     newDiv.appendChild(newh2);
     newDiv.appendChild(newPara);
     document.querySelector('.main').appendChild(newDiv);
     newDiv.style.backgroundColor = 'rebeccapurple';
    
   


    
    
    // Part 8
    
    
    document.querySelector('#quote-title').addEventListener('click',randomQuote);
   

   
  
    // Part 9
    let blogEl = document.querySelectorAll(".blog-post");

    for (let i = 0; i < blogEl.length; i++) { 

        
        blogEl[i].addEventListener('mouseout', (event) => {
            blogEl[i].classList.toggle("purple");
        });
        
        blogEl[i].addEventListener('mouseenter', (event) => {
            blogEl[i].classList.toggle("red");
        });
     }

    }); 
