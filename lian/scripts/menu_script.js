const menu_open = document.querySelector('.nav_menu_mob');
const menu_body = document.querySelector('.mob_menu_open');
const sympol = menu_open.getElementsByTagName('a');
let isMenuOpen = false;


menu_open.addEventListener('click', () => {
	if(!isMenuOpen) {
		menu_body.style.display = 'block';
		sympol[0].innerHTML = '&#x274E';
		isMenuOpen = true;
	} else {
		menu_body.style.display = 'none';
		sympol[0].innerHTML = '&#9776';
		isMenuOpen = false;
	}
	
})