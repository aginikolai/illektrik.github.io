
const shoping_area = document.querySelector('.items_body');
shoping_area.addEventListener('mousemove', showing_item);

function showing_item () {

	const items_list = document.querySelectorAll('.main_shop__div');
	for (var i = 0; i < items_list.length; i++) {
		items_list[i].addEventListener('click', function () {
			const name = this.querySelector('.main_item_price__p').innerHTML;

			localStorage.setItem('item_info', name);
		})
	}
}
