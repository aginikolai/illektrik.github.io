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

changingPagesColor();

const sizes_btns = document.querySelectorAll('.sizes__div');
sizes_btns.forEach = [].forEach;
for (var i = 0; i < sizes_btns.length; i++) {
		sizes_btns[i].addEventListener('click', function() {
			sizes_btns.forEach(name => {
				name.style.background = '#f4f4f4';
				name.childNodes[1].style.color = '#4d4d4d'
			});
			this.style.background = '#fd926d';
			this.childNodes[1].style.color = 'white'
		})
	}