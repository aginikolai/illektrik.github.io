const itemsArea = document.querySelectorAll('.items');
for (var i = 0; i < itemsArea.length; i++) {
	itemsArea[i].addEventListener('mousemove', function () {
		const add_btn = document.querySelectorAll('.buy_btn');
		add_btn.forEach = [].forEach;
		add_btn.forEach( name => {
			name.addEventListener('click', addingItem)
		});


	})
}

	
	function addingItem () {
		console.log('hui')
		const price = this.parentNode.querySelector('.main_item_price__h2').innerHTML;
		let arr = [];
		arr = price.split('');
		arr.splice(0,1);
		let result = parseFloat(arr.join(''));
		//меняем значение общей цены
		let last_total = parseFloat(localStorage.getItem('item_price'))
		last_total += result;
		localStorage.setItem('item_price', last_total);
		//меняем значение числа покупок
		let last_items = parseFloat(localStorage.getItem('items_counter'));
		last_items +=1;
		localStorage.setItem('items_counter', last_items);
		const items_price = document.querySelector('.item_price');
		items_price.innerHTML = parseFloat(last_total).toFixed(2)
		const items_counter = document.querySelector('.items_count');
		items_counter.innerHTML = last_items;
	}

let total_price = 0;
let items_count = 0;


// обьявляешь две перменный для локалсторадж при загрузке главной страницы, 
//а потом обращаешься постоянно к ним