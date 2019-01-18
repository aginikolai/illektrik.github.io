const categories_open = document.querySelectorAll('.category_open');

let isOpen = false
for (var i = 0; i < categories_open.length; i++) {
	categories_open[i].addEventListener('click', openingCategories);
}

function openingCategories () {
	if (!isOpen) {
			isOpen = true
			this.innerHTML = '-'
			this.style.paddingRight = '5px';
			const parent = this.parentNode.parentNode;
			const category =  parent.querySelector('.ctegories_open');
			category.style.display = 'flex'
			
		} else if (isOpen) {

			isOpen = false;
			this.innerHTML ='+'
			this.addEventListener('click', openingCategories);
			this.style.paddingRight = '0'
			const parent = this.parentNode.parentNode;
			const category =  parent.querySelector('.ctegories_open');
			category.style.display = 'none'

		}
}