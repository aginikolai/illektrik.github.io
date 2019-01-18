let zero_price = 0;
localStorage.setItem('item_price', zero_price);
localStorage.setItem('items_counter', zero_price);

const main_shop = document.querySelector('.main_shop_present');


window.onload = function () {
	
	
	const priceTotal = document.querySelector('.item_price');
	priceTotal.innerHTML = `${(parseFloat(localStorage.getItem('item_price'))).toFixed(2)}`;
	const items_value = document.querySelector('.items_count');
	items_value.innerHTML = `${localStorage.getItem('items_counter')}`

	let length = 0;
	items.forEach( (item, i) => {
		if (item.main_category == 'whats hot?') {
			let newItem = document.createElement('div');
			
			newItem.innerHTML = makeNewItem(item);
			const target = newItem.querySelector('.main_shop__div');
			target.firstElementChild.style.background = `url(${item.photo}) 
			 center center no-repeat`
			main_shop.innerHTML += `${newItem.innerHTML}`;
			length +=1;
		}
		
	})
	main_shop.style.width = `${length*255}px`;
	main_shop.style.marginLeft = '0px';
	function shop_it() {
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



const items = [
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
console.log(items.length)