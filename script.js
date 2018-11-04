const open = document.querySelector('.menu_open_button');
const menu_list = document.querySelector('.mobile_menu_open');
const close = document.querySelector('.menu_mobile_close');

open.addEventListener('click', function () {
	menu_list.style.display = 'block';
});
close.addEventListener('click', function () {
	menu_list.style.display = 'none';
})