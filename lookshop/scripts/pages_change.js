const pages = document.querySelectorAll('.products_pages__div');
const products_num = document.querySelector('.prod_num');

function renderPages (itemCollection) {
	const pages_area = document.querySelector('.pages_wrap');
	pages_area.innerHTML = '';
	//рендерим блоки с номерами страниц
	let NumOfPages = Math.ceil(itemCollection.length/9)
	for (var i = 1; i <= NumOfPages; i++) {
		let page_block = `<div class="products_pages__div number_page">
								<p class="products_sort__p pages_num">${i}</p>
							</div>`;
		pages_area.innerHTML += page_block;
	}

	//добавляем события для каждого блока страницы
	let pages = pages_area.querySelectorAll('.products_pages__div');
	pages.indexOf = [].indexOf;
	for (var i = 0; i < pages.length; i++) {
		pages[i].addEventListener('click', function () {
			//определяем номер первого и последнего айтема
			let firstItem = pages.indexOf(this)*9;
			let lastItem = firstItem + 8;
			const main_shop = document.querySelector('.items_body');
			main_shop.innerHTML = '';
			
			//рендерим айтемы в соответсвие с нажатой клавишей
			for (var g = firstItem; g <=lastItem; g++) {
				if (itemCollection[g] != undefined) {
				let newItem = document.createElement('div');
			     newItem.innerHTML = makeNewItem(itemCollection[g]);
			     const target = newItem.querySelector('.main_shop__div');
			     target.style.marginBottom = '5%';
			     target.firstElementChild.style.background = 
			     `url(${itemCollection[g].photo}) center center`;
			     main_shop.innerHTML += `${newItem.innerHTML}`;
				}
				
			}
			const numberOfDivs = main_shop.querySelectorAll('.main_shop__div')
			if (numberOfDivs.length < 9) {
				lastItem = itemCollection.length - 1;
			}
			//изменям строку с информацией о количестве айтемов
			const item_first = document.querySelector('.item_first');
			const item_last = document.querySelector('.item_last');
			const items_all = document.querySelector('.items_all');
			item_first.innerHTML = (firstItem + 1) ;
			item_last.innerHTML = (lastItem + 1);
			items_all.innerHTML = itemCollection.length;
			shop_it();
			//добавляем функцию записи информации о выбранном товаре

		})
	}
	
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
shop_it();
function changingPagesColor () {
	const pages_btns = document.querySelectorAll('.number_page');
	pages_btns.forEach = [].forEach;

	for (var i = 0; i < pages_btns.length; i++) {
		pages_btns[i].addEventListener('click', function() {
			pages_btns.forEach(name => {
				name.style.background = '#f4f4f4';
				name.childNodes[1].style.color = '#4d4d4d'
			});
			this.style.background = '#fd926d';
			this.childNodes[1].style.color = 'white'
		})
	}
}
changingPagesColor()

}
renderPages (items_store);
