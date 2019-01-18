const select_area = document.querySelector('.select--products');
const select = select_area.getElementsByTagName('select');


select[0].addEventListener('change', function () {
	if (select[0].value == 'Price') {
		items_store.sort(sortByPrice('price'));
	} else if (select[0].value == 'Date') {
		items_store.sort(sortByPrice('date'));
	}
	page1 =[]
		for (var i = 0; i < items_store.length; i++) {
			if (i < 9) {page1.push(items_store[i])} 
		}
		const main_shop = document.querySelector('.items_body');
		main_shop.innerHTML = '';
		page1.forEach(item => {
		let newItem = document.createElement('div');
			newItem.innerHTML = makeNewItem(item);
			const target = newItem.querySelector('.main_shop__div');
			target.style.marginBottom = '5%';
			target.firstElementChild.style.background = `url(${item.photo}) center center no-repeat`
			main_shop.innerHTML += `${newItem.innerHTML}`;
		})
		renderPages (items_store);
})

function sortByPrice (name) {
	return function sort (a,b) {
				return  a[name] > b[name] ? 1 : -1;
		}
}


