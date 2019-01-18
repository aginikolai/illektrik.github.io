const plus_menos = document.querySelectorAll('.prod_quantity');
const numOfItems = document.querySelector('.product_quantity__span');

//добавляем возможность изменять количество товаров

plus_menos[0].addEventListener('click', ()=> {
	let number = parseFloat(numOfItems.innerHTML);
	if( number > 1) {
		numOfItems.innerHTML = `${number - 1}`
	}
});

plus_menos[1].addEventListener('click', ()=> {
	let number = parseFloat(numOfItems.innerHTML);
	numOfItems.innerHTML = `${number + 1}`
});


//прибавляем цену и количество к общим данным
const button = document.querySelector('.prod_add');
button.addEventListener('click', ()=>{
	//меняем число айтемов
	let last_total = parseFloat(localStorage.getItem('items_counter'));
	last_total += parseFloat(numOfItems.innerHTML);
	localStorage.setItem('items_counter', last_total);
	const items_counter = document.querySelector('.items_count');
	items_counter.innerHTML = localStorage.getItem('items_counter');
	//меняем итоговую цену
	const price = document.querySelector('.products_item_about__h3').innerHTML;
	let arr = [];
	arr = price.split('');
	arr.splice(0,1);
	let result = parseFloat(arr.join(''));
	result *= parseFloat(numOfItems.innerHTML);
	let last_price = parseFloat(localStorage.getItem('item_price'))
	last_price += result;
	localStorage.setItem('item_price', last_price);
	const items_price = document.querySelector('.item_price');
	items_price.innerHTML = parseFloat(localStorage.getItem('item_price')).toFixed(2)
})