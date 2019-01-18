let page1 = [];

//функция для производства карточек с товарами
function makeNewItem (item) {
	
	let newItem = `<div class="main_shop__div">
				<div class="main_item_img"></div>
				<div class="main_item_price">
					<p class="main_item_price__p">${item.name}</p>
					<h2 class="main_item_price__h2">$${item.price}</h2>
					<button class="header_name__btn main_buy__btn buy_btn">
						<span class="main_buy__span">add to cart</span>  
						<span class="btn__span">+</span>
					</button>
				</div>
				</div>
			`;
		
	return newItem;
}

const items_store = [
	{
		name: 'MIMOSA nice DRESS',
		price: 76.95,
		date: 1,
		photo: 'img_items/item0.jpg',
		main_category: 'whats hot?'
	},
	{
		name: 'feel tank',
		price: 37.65,
		date: 2,
		photo: 'img_items/item1.jpg',
		main_category: 'whats hot?',
		clearance: true
	},
	{
		name: 'hot dress',
		price: 86.95,
		date: 3,
		photo: 'img_items/item2.jpg',
		main_category: 'whats hot?',
		clearance: true
	},
	{
		name: 'PETROL SWEATER',
		price: 21.55,
		date: 4,
		photo: 'img_items/item3.jpg',
		main_category: 'whats hot?',
		clearance: true
	},
	{
		name: 'MIMOSA just DRESS',
		price: 19.99,
		date: 5,
		photo: 'img_items/item4.jpg',
		main_category: 'whats hot?'
	},
	{
		name: 'nadia dress',
		price: 59.95,
		date: 6,
		photo: 'img_items/item5.jpg',
		main_category: 'whats hot?',
		clearance: true
	},
	{
		name: 'mimosa face dress',
		price: 91.65,
		date: 7,
		photo: 'img_items/item6.jpg',
		main_category: 'designers'
	},
	{
		name: 'just shorts',
		price:28.95,
		date: 8,
		photo: 'img_items/item7.jpg',
		main_category: 'designers'
	},
	{
		name: 'valeria dress',
		price: 9.95,
		date: 9,
		photo: 'img_items/item8.jpg',
		main_category: 'designers'
	},
	{
		name: 'sofi blouse',
		price: 26.95,
		date: 10,
		photo: 'img_items/item9.jpg',
		main_category: 'designers'
	},
	{
		name: 'gooding shorts',
		price: 79.95,
		date: 11,
		photo: 'img_items/item10.jpg',
		main_category: 'designers'
	},
	{
		name: 'sofia dress',
		price: 64.95,
		date: 12,
		photo: 'img_items/item11.jpg',
		main_category: 'featured'
	},
	{
		name: 'mari blouse',
		price: 48.85,
		date: 13,
		photo: 'img_items/item12.jpg',
		main_category: 'featured'
	},
	{
		name: 'cool shorts',
		price: 98.95,
		date: 14,
		photo: 'img_items/item13.jpg',
		main_category: 'featured'
	},
	{
		name: 'josevina dress',
		price: 94.95,
		date: 15,
		photo: 'img_items/item14.jpg',
		main_category: 'featured'
	},
	{
		name: 'susan blouse',
		price: 13.95,
		date: 16,
		photo: 'img_items/item15.jpg',
		main_category: 'featured'
	},
	{
		name: 'MIMOSA largo DRESS',
		price: 88.95,
		date: 17,
		photo: 'img_items/item0.jpg',
		main_category: 'whats hot?'
	},
	{
		name: 'feel free',
		price: 59.95,
		date: 18,
		photo: 'img_items/item1.jpg',
		main_category: 'whats hot?'
	},
	{
		name: 'nice dress',
		price: 6.55,
		date: 19,
		photo: 'img_items/item2.jpg',
		main_category: 'whats hot?'
	},
	{
		name: 'gaosiline SWEATER',
		price: 88.55,
		date: 20,
		photo: 'img_items/item3.jpg',
		main_category: 'whats hot?'
	},
	{
		name: 'MIMOSA sweet DRESS',
		price: 43.95,
		date: 21,
		photo: 'img_items/item4.jpg',
		main_category: 'whats hot?'
	},
	{
		name: 'miranda dress',
		price: 71.95,
		date: 22,
		photo: 'img_items/item5.jpg',
		main_category: 'whats hot?'
	}, {
		name: 'polish dress',
		price: 67.99,
		date: 23,
		photo: 'img_items/item11.jpg',
		main_category: 'featured'
	}
]


//изначальная версия логики для блоков с номерами страниц
for (var i = 0; i < items_store.length; i++) {
	if (i < 9) {page1.push(items_store[i])} 
}

const main_shop = document.querySelector('.items_body')


window.onload = function() {
	const priceTotal = document.querySelector('.item_price');
	priceTotal.innerHTML = `${(parseFloat(localStorage.getItem('item_price'))).toFixed(2)}`;
	const items_value = document.querySelector('.items_count');
	items_value.innerHTML = `${localStorage.getItem('items_counter')}`

	page1.forEach(item => {
		let newItem = document.createElement('div');
			newItem.innerHTML = makeNewItem(item);
			const target = newItem.querySelector('.main_shop__div');
			target.style.marginBottom = '5%';
			target.firstElementChild.style.background = `url(${item.photo}) center center no-repeat`
			main_shop.innerHTML += `${newItem.innerHTML}`;
	})
	function shop_it () {
	const productCart = document.querySelectorAll('.main_item_img')
productCart.forEach = [].forEach;

productCart.forEach( name => {
	name.addEventListener('mousemove', function () {
		name.innerHTML = `<a href="product.html" target="_blank" class="shop_it">
				<img src="images/shop_it.png" alt="">
				<p class="shop_it__p">SHOP IT</p>
				</a>`
	});
	name.addEventListener('mouseleave', function () {
		name.innerHTML = '';
	})
})
}
	shop_it()

}

//попробуй придумать формулу для определения того, сколько айтемов можно кинуть на страницу

const test = document.querySelector('.upheader__select');
test.addEventListener('change', function() {
	console.log(test.value)
})