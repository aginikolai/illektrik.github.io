const clearance_body = document.querySelector('.clearence_body')

for (var i = 0; i < items.length; i++) {
	 if(items[i].clearance === true) {
	 	let newItem = document.createElement('div');
			
			newItem.innerHTML = makeNewItem(items[i]);
				
			const target = newItem.querySelector('.main_shop__div');
			target.firstElementChild.style.background = `url(img_items/item${i}.jpg) center center`
			clearance_body.innerHTML += `${newItem.innerHTML}`;
	 }
	
}

//функция для производства карточек с товарами
function makeNewItem (item) {
	
		let newItem = `<div class="main_shop__div">
				<div class="main_item_img">
				
				</div>
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