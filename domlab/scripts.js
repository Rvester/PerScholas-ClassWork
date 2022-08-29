let menuLinks = [
	{text: 'about', href: '/about'},
	{text: 'catalog', href: '#', subLinks: [
	  {text: 'all', href: '/catalog/all'},
	  {text: 'top selling', href: '/catalog/top'},
	  {text: 'search', href: '/catalog/search'},
	]},
	{text: 'orders', href: '#' , subLinks: [
	  {text: 'new', href: '/orders/new'},
	  {text: 'pending', href: '/orders/pending'},
	  {text: 'history', href: '/orders/history'},
	]},
	{text: 'account', href: '#', subLinks: [
	  {text: 'profile', href: '/account/profile'},
	  {text: 'sign out', href: '/account/signout'},
	]},
  ];






let mainEl = document.querySelector("main");
console.log(mainEl)


mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = '<h1> SEI ROCKS! </h1>';
mainEl.setAttribute('class', 'flex-ctr');


let topMenuEL = document.querySelector("#top-menu");


topMenuEL.style.height = '100%';
topMenuEL.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEL.setAttribute('class', 'flex-around');

for (i = 0 ; i < menuLinks.length; i++){
	let newElement = document.createElement('a');
	newElement.setAttribute('href', menuLinks[i].href);
	newElement.innerText = menuLinks[i].text;
	topMenuEL.appendChild(newElement);
    

}

let subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
subMenuEl.setAttribute('class', 'flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0'


let topMenuLinks = topMenuEL.querySelector('a')

let showingSubMenu = false;


topMenuEL.addEventListener('click', function(event){
	event.preventDefault();
	if(event.target.tagName !== "A"){
		return;
	}
console.log(event.target.textContent);
    
	if(event.target.classList.contains("active")){
		event.target.classList.remove("active")
		showingSubMenu = false;
		subMenuEl.style.top = '0';
	
		return;
		
	}
	 for(let i = 0; i < topMenuLinks.length; i++){
		topMenuLinks[i].classList.remove('active')
		
	 }
	 
	 event.target.classList.add('active')

	 let anchorName = event.target.textContent;
	console.log(menuLinks) 
	let menu = menuLinks.find((link) => {
		
		return link.text === anchorName; 
	  });
	
	  if (menu === undefined) {
		return;
	  }
	
	  if (menu.subLinks) {
		showingSubMenu = true;
	  } else {
		showingSubMenu = false;
	  }
	 
	
		
			 
	
	 function buildSubMenu(subLinks){
		subMenuEl.innerHTML = "";
	
		for (let i = 0; i < subLinks.length; i++){
			let aLink = document.createElement ('a');
			aLink.setAttribute('href', subLinks[i].href);
			aLink.textContent = subLinks[i].text;
	
			subMenuEl.appendChild(aLink);
			
			}
       
			
		}
		console.log(showingSubMenu)
		if(showingSubMenu){
			buildSubMenu(menu.subLinks);
			subMenuEl.style.top = '100%';
		}else{
			subMenuEl.style.top = '0';
			
		}
		if (anchorName == 'about'){
			mainEl.innerHTML = '<h1>about</h1>'
		}
});

subMenuEl.addEventListener("click", function(event){
	event.preventDefault();
	if (event.target.tagName !== "A") {
	  return;
	}
	console.log(event.target.textContent);
  
	
	showingSubMenu = false;
	subMenuEl.style.top = "0";
  
	
	for (let i = 0; i < topMenuLinks.length; i++) {
	  topMenuLinks[i].classList.remove("active");
	}
  
	
	mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
  });




























   







