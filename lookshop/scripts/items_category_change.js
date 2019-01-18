const category = document.querySelectorAll('.shop_nav_menu__li');
category.forEach = [].forEach;


category.forEach( (name) => {
	name.addEventListener('click', function () {
		let length = 0;
		//меняем цвет при переключении между категорями
		for (var i = 0; i < category.length; i++) {
			category[i].style.background = 
			'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box';
			category[i].firstElementChild.style.color = '#555555';
		};
		this.style.background = '#fd926d';
		this.firstElementChild.style.color = 'white';
		
		//реалезуем логику изменения карточек товаров
		const position = this.firstElementChild.innerHTML;
		main_shop.innerHTML = '';
		for (var i = 0; i < items.length; i++) {
			if(items[i].main_category == position) {
				let newItem = document.createElement('div');
			
				newItem.innerHTML = makeNewItem(items[i]);
				const target = newItem.querySelector('.main_shop__div');
				target.firstElementChild.style.background = `url(${items[i].photo}) center center`;
				main_shop.innerHTML += `${newItem.innerHTML}`;
				length +=1;
			
			}
		}
		main_shop.style.width = `${length*255}px`;
		//добавление ссылки на покупку товара при наведении
		shop_it()
	})
});






