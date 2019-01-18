function shop_it () {
	const productCart = document.querySelectorAll('.main_item_img')
productCart.forEach = [].forEach;

productCart.forEach( (name, g) => {
	
	name.addEventListener('mousemove', function () {
		for (var i = 0; i < productCart.length; i++) {
		productCart[i].innerHTML = '';
		}
		name.innerHTML = `<a href="product.html" target="_blank" class="shop_it">
				<img src="images/shop_it.png" alt="">
				<p class="shop_it__p">SHOP IT</p>
				</a>`;
		
		
	});
	name.addEventListener('mouseleave', function () {
		for (var i = 0; i < productCart.length; i++) {
		productCart[i].innerHTML = '';
		}
		name.innerHTML = '';
	})
	
})


}
shop_it();
