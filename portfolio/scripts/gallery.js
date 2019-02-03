window.onload = function () {

	for (var i = 1; i < 11; i++) {
		let gallery = document.querySelector('.my_works');
		
		gallery.innerHTML += `<div class="my_work__div my_work__div-${i}">
		<div class="work_hover">
		<h1 class="work_hover__h1">name</h1>
		<div class="work_gallery">
		<div class="work_gallery__div work_gallery__div${i}"></div>
		<div class="work_gallery__div work_gallery__div${i}"></div>
		<div class="work_gallery__div work_gallery__div${i}"></div>
		<div class="work_gallery__div work_gallery__div${i}"></div>
		</div>
		</div>
		</div>`
		const test = document.querySelector(`.my_work__div-${i}`)
		test.style.background = `url(imgs/img${i}.jpg)`;
		test.style.backgroundSize = 'cover';

		//логика для рендера маленьких фоток при наведении на одну из работ
		const hover_gallery = test.querySelectorAll('.work_gallery__div');
		for (var g = 0; g < hover_gallery.length; g++) {
			hover_gallery[g].style.background = `url(imgs/img${i}.jpg)`;
			hover_gallery[g].style.backgroundSize = 'cover';
		}


		

	}
}

