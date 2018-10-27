const makeOrder = document.querySelector('.order_btn');
const modal = document.querySelector('.modal_overlay');
const orderClose = document.querySelector('.close_order');
const orderWindow = document.querySelector('.make_order');

makeOrder.addEventListener('click', function () {
	modal.style.display = 'block';
	orderWindow.style.display = 'block';
});
orderClose.addEventListener('click', function () {
	modal.style.display = 'none';
	orderWindow.style.display = 'none';
})