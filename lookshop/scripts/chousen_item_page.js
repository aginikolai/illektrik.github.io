const shoping_area = document.querySelector('.clearence_body--mt');
shoping_area.addEventListener('mousemove', showing_item);

function showing_item () {

	const items_list = document.querySelectorAll('.main_shop__div');
	for (var i = 0; i < items_list.length; i++) {
		items_list[i].addEventListener('click', function () {
			const name_of_item = this.querySelector('.main_item_price__p').innerHTML;
			localStorage.setItem('item_info', name_of_item);
			let nameOfItem = localStorage.getItem('item_info');
	let itemDetails = {};
const itemName = document.querySelector('.prod_name__a');
	itemName.innerHTML = `${name_of_item}`;
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
	
	photo_big.style.background = `url(${itemDetails.photo}) center center no-repeat`;
	const photos_small = photo_area.getElementsByTagName('img');
	for (var i = 0; i < photos_small.length; i++) {
		photos_small[i].src = `${itemDetails.photo}`
	}
		});
	
	}


}
// сначала сотри старый innerHTML, а потом запиши новый