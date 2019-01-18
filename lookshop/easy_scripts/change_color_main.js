const arrows_btns = document.querySelectorAll('.shop_nav_arrows__div');

for (var i = 0; i < arrows_btns.length; i++) {
	arrows_btns[i].addEventListener('click', function() {
		arrows_btns[0].style.background = '#f2f2f2';
		arrows_btns[1].style.background = '#f2f2f2';
		this.style.background = '#fd926d'
	})
}