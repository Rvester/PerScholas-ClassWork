let h1Tag = document.getElementById("title")


//h1Tag is an element modelled as an object
// it has a bunch of properties we can access
//with dot notation


//select an element by its tag name (p)
let pTag = document.querySelector("#title")//same as getElementById 
//select an element by its calss name ("main-title")
// let pTag = document.querySelector(".main-title")

//select an element by its id name ("title")
//let pTag = document.querySelector("#title")
let pEL = document.querySelector(".cool")

//gives us everything inside the tag, including HTML
//console.log(pTag.innerHTML)
// gives us only the text inside the tag
//console.log(ptag.textContent)

console.log(pEL)

console.dir(h1Tag)
h1Tag.style.textAlign = "center"
h1Tag.style.color = "darkCyan"

let anchorTag = document.querySelector("a")

anchorTag.setAttribute("href", "https://www.google.com")


//console.log (h1Tag.innerText)

//selecting multiple elements by tag name

let liTags = document.getElementsByTagName("li")
//console.log(liTags)[0] or [1] or [2]

// selecting multiple elements by className

let liTags2 = document.getElementsByClassName("comment")

//console.log(liTags2)

//selecting multiple elements by whatever you liike
//let liTag3 = document.querySelectorAll('.comment"')
//console.log(liTags3)
///console.log('looping...')

// we can interate over our array of elements
// (HTMLCollection or NodeList)

///console.log('looping with for of...')


let pText = document.querySelector('p')





for (var i = 10; i <= 30; i++) {
  pText.style.fontSize = `${i}px`;
}


