
	var menuLinks = [
	    {text: 'about', href: '/about'},
	    {text: 'catalog', href: '/catalog'},
	    {text: 'orders', href: '/orders'},
	    {text: 'account', href: '/account'},
	  ];






let mainEl = document.querySelector("main");


mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = '<h1> SEI ROCKS! </h1>';
mainEl.setAttribute('class', 'flex-ctr');
mainEl.style.height = '200%';

let topMenuEL = document.querySelector("#top-menu");


topMenuEL.style.height = '100%';
topMenuEL.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEL.setAttribute('class', 'flex-around');

for (i = 0 ; i < menuLinks.length; i++){
     topMenuEL = document.querySelector("#top-menu");
     let newElement = document.createElement('a');
     newElement.setAttribute('href', menuLinks[i].href);
     newElement.innerHTML = menuLinks[i].text;
     topMenuEL.appendChild(newElement);


   
}




