const menuOpen = document.querySelector('.mob_open');
const menuMob = document.querySelector('.mobile_menu_open');
const menuClose = document.querySelector('.mob_close');

menuOpen.addEventListener('click', function () {
	menuMob.style.display = 'block';
	menuOpen.style.display = 'none';
	menuClose.style.display = 'block';
});
menuClose.addEventListener('click', function () {
	menuMob.style.display = 'none';
	menuOpen.style.display = 'block';
	menuClose.style.display = 'none';
})