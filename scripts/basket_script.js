const order = document.querySelector('.add');
const basket = document.querySelector('.basket');
const order_window = document.querySelector('.make_order');
const modal_leer = document.querySelector('.modal_overlay');
const size = document.querySelector('.order_size');

const sizeChoise = size.getElementsByTagName('button');
sizeChoise.forEach = [].forEach;
for (var i = 0; i < sizeChoise.length; i++) {
	sizeChoise[i].addEventListener('click', function() {
		console.log(sizeChoise);
		sizeChoise.forEach(function(item) {
			item.style.background = 'white';
		})
		this.style.background = '#63d1bb';
	})
}


order.addEventListener('click', function () {
	basket.innerHTML = 'Корзина: 1 товар';
	order_window.style.display = 'none';
	modal_leer.style.display = 'none';
	console.log(sizeChoise);
})