const gallery = document.querySelector('.my_works');
gallery.addEventListener('mousemove', function () {
	const photos = document.querySelectorAll('.my_work__div');
	photos.forEach = [].forEach;
	photos.forEach((item, i) => {
		item.addEventListener('mousemove', function () {
			const hover = item.querySelector('.work_hover');
			hover.style.display ='flex'
		})
		item.addEventListener('mouseleave', function () {
			const hover = item.querySelector('.work_hover');
			hover.style.display ='none'
		})
		item.addEventListener('click', function () {
			const overlay = document.querySelector('.modal_overlay');
			overlay.style.display = 'block';
			console.log(document.documentElement.scrollTop)
			const description = document.querySelector('.work_open');
			description.style.top = (document.documentElement.scrollTop +20) + 'px';
			description.classList.add('anim_upside')
			description.style.display = 'flex';
			description.innerHTML = `
				<div class="work_open_left">
				<img src="imgs/img${i+1}.jpg" alt="" class="work_open_left__img">
			</div>
			<div class="work_open_right">
				<img src="imgs/img${i+1}.jpg" alt="" class="work_open_right__img">
				<img src="imgs/img${i+1}.jpg" alt="" class="work_open_right__img">
				<img src="imgs/img${i+1}.jpg" alt="" class="work_open_right__img">
				<img src="imgs/img${i+1}.jpg" alt="" class="work_open_right__img">
				<img src="imgs/img${i+1}.jpg" alt="" class="work_open_right__img">
				<img src="imgs/img${i+1}.jpg" alt="" class="work_open_right__img">
			</div>
			<div class="work_description">
				<h1 class="work_hover__h1 work_hover__h1--center">name</h1>
				<p class="work_description__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium labore velit dolore non ea quasi eveniet consectetur minus. Culpa soluta repudiandae mollitia in atque! Vel quaerat excepturi temporibus odio sunt tenetur quae error accusamus dolores. Dolorem dolorum harum, nostrum labore quia quae corrupti eius sit voluptas rerum earum blanditiis nemo ipsum maxime nisi aspernatur aliquid tenetur ratione, ipsam debitis pariatur maiores velit modi id asperiores. Nesciunt veritatis molestias rerum quod!</p>
			<svg aria-hidden="true" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>	
			</div>
			`;

			const close = document.querySelector('.fa-w-11');
			
			close.addEventListener('click', ()=>{
			overlay.style.display = 'none';
			description.style.display="none";
		})

		})

	})
})

