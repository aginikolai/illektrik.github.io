const close = document.querySelector('.close_order');
const login = document.querySelector('.login');
const enter = document.querySelector('.main_menu__a--right');
const modal = document.querySelector('.modal_overlay');


enter.addEventListener('click', ()=> {
	login.style.display = 'block';
	modal.style.display = 'block'

});
close.addEventListener('click', () => {
	login.style.display = 'none';
	modal.style.display = 'none';

});