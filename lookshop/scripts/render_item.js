window.onload = function () {
	//рендерим общий прайс и количество
	const priceTotal = document.querySelector('.item_price');
	priceTotal.innerHTML = `${(parseFloat(localStorage.getItem('item_price'))).toFixed(2)}`;
	const items_value = document.querySelector('.items_count');
	items_value.innerHTML = `${localStorage.getItem('items_counter')}`;

	//рендерим название айтема для поля с ссылками
	const itemName = document.querySelector('.prod_name__a');
	itemName.innerHTML = `${localStorage.getItem('item_info')}`
	
	let nameOfItem = localStorage.getItem('item_info');
	let itemDetails = {};

	items.forEach( item => {
		if (item.name == nameOfItem) {
			itemDetails = item;
		}
	});
	const item_about = document.querySelector('.protuct_main_right');

	//рендерим цену
	const price = item_about.querySelector('.products_item_about__h3');
	price.innerHTML = `$${itemDetails.price}`;

	//рендерим название
	const name = item_about.querySelector('.products_item_about__h4');
	name.innerHTML = itemDetails.name;

	//рендерим фото
	const photo_area = document.querySelector('.protuct_main_left');
	const photo_big = photo_area.querySelector('.product_img_big');
	console.log(photo_big)
	photo_big.style.background = `url(${itemDetails.photo}) center center no-repeat`;
	const photos_small = photo_area.getElementsByTagName('img');
	for (var i = 0; i < photos_small.length; i++) {
		photos_small[i].src = `${itemDetails.photo}`
	}
}

