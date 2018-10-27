const search = document.querySelector('.search');
search.addEventListener('mouseenter', function () {
	search.innerHTML = '<img src="Images_cataloge/search_hover.png" alt="">';
	
});
search.addEventListener('mouseleave', function() {
	search.innerHTML = '<img src="Images/search.png" alt="">';
});


const cart = document.querySelector('.cart');
cart.addEventListener('mouseenter', function () {
	cart.innerHTML = '<img src="Images_cataloge/cart_hover.png" alt="">';
	
});
cart.addEventListener('mouseleave', function() {
	cart.innerHTML = '<img src="Images/cart.png" alt="">';
});


const logo_footer = document.querySelector('.footer_left');
logo_footer.addEventListener('mouseenter', function () {
	logo_footer.innerHTML = '<img src="Images_cataloge/logo-footer.png" alt="">';
	
});
logo_footer.addEventListener('mouseleave', function() {
	logo_footer.innerHTML = '<img src="Images/logo-footer.png" alt="">';
});


// const form_mail = document.querySelector('.phone');
// form_mail.addEventListener('mouseenter', function () {
// 	form_mail.innerHTML = '<input type="text" placeholder="Введите e-mail*"><img src="Images_cataloge/mail_hover.png" alt="">'
// });
// form_mail.addEventListener('mouseleave', function () {
// 	form_mail.innerHTML = '<input type="text" placeholder="Введите e-mail*"><img src="Images_cataloge/mail.png" alt="">'
// })


// const mail_form = document.querySelector('.mail_form');
// mail_form.addEventListener('mouseenter', function () {
// 	mail_form.innerHTML = '<input type="text" placeholder="Введите e-mail*"><img src="Images_cataloge/phone_hover.png" alt="">'
// });
// mail_form.addEventListener('mouseleave', function () {
// 	mail_form.innerHTML = '<input type="text" placeholder="Введите e-mail*"><img src="Images_cataloge/phone.png" alt="">'
// })