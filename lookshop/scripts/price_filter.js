const filter = document.querySelector('.filter_btn');
filter.addEventListener('click', filltering);

function filltering () {
	const item_cover = document.querySelector('.products_cover');
	item_cover.style.display = 'none';
	//создаем новый массив с отфильтрованными ценами
	let right = parseFloat(price_right_val.innerHTML);
	let left = parseFloat(price_left_val.innerHTML);
	let newItemsList = [];
	items_store.forEach(name =>{
		if( name.price < right && name.price > left  ) {
			newItemsList.push(name)
		}
	});

	//рендерим новый список товаров
	main_shop.innerHTML = '';
	for (var i = 0; i < 9; i++) {
		if (newItemsList[i] != undefined) {
			let newItem = document.createElement('div');
			     newItem.innerHTML = makeNewItem(newItemsList[i]);
			     const target = newItem.querySelector('.main_shop__div');
			     target.style.marginBottom = '5%';
			     target.firstElementChild.style.background = `url(${newItemsList[i].photo}) center center`
			     main_shop.innerHTML += `${newItem.innerHTML}`;
		}
	}
	
	//изменяем число страниц в соответсвии с новыми данными
	renderPages(newItemsList);

	//изменям строку с информацией о количестве айтемов
	let item_first = document.querySelector('.item_first');
	let item_last = document.querySelector('.item_last');
	const items_all = document.querySelector('.items_all');
	items_all.innerHTML = newItemsList.length;

	//проверка на количество страниц
	const pages = document.querySelectorAll('.number_page');
	const items_quantity = document.querySelector('.products_pages')
	if (pages.length == 1) {
		pages[0].style.display = 'none';
		items_quantity.style.justifyContent = 'flex-end'
		item_first.innerHTML = 1;
		item_last.innerHTML = newItemsList.length;
	} else if (pages.length == 0) {
		const item_cover = document.querySelector('.products_cover');
		item_cover.style.display = 'flex';
		
	} else {
		items_quantity.style.justifyContent = 'space-between';
		for (var i = 0; i < pages.length; i++) {
			pages[i].style.display = 'flex';
		}
	}
	


};