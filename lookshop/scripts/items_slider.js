const btn_right = document.querySelector('.shop_nav_arrows__div--active');
let screan_width = parseFloat(document.documentElement.clientWidth);

window.onresize = function() {
	screan_width = parseFloat(document.documentElement.clientWidth);
}

btn_right.addEventListener('click', function () {
	screan_width += 235;
	console.log(screan_width);
	const main_shop = document.querySelector('.main_shop_present');
	const width = parseFloat(main_shop.style.width) + 233;
	if ( (width - screan_width) > 0) {
		const margin =  parseFloat(main_shop.style.marginLeft)
		main_shop.style.marginLeft = (margin - 253) + 'px';
	}
});

const btn_left = document.querySelector('.shop_nav_arrows__div');
btn_left.addEventListener('click', function() {
	screan_width = parseFloat(document.documentElement.clientWidth);
	const main_shop = document.querySelector('.main_shop_present');
	const margin =  parseFloat(main_shop.style.marginLeft);
	if ( margin < 0) {
		main_shop.style.marginLeft = (margin + 253) + 'px';
	}
})


