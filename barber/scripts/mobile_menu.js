const menu_open = document.querySelector('.mob_menu_open');
const mobile_menu = document.querySelector('.mob_menu_show');
const menu_close = document.querySelector('.mob_menu_close');

menu_open.addEventListener('click', () => {
	mobile_menu.style.display = 'block';
	menu_close.style.display = 'flex';
});
menu_close.addEventListener('click', () => {
	mobile_menu.style.display = 'none';
	menu_close.style.display = 'none';
})