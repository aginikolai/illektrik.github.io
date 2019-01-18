const arrows = document.querySelectorAll('.menu_arrows__div');
const dots = document.querySelectorAll('.menu_dots__div');
dots[0].style.background = '#ff986b';
let num_of_slide = 0;

arrows[1].addEventListener('click', ()=>{
	//двигаем блок вправо
	let picture = document.querySelector('.header_name');
	picture.style.display = 'none';
	picture.classList.add('feedback_anim_right');
	picture.style.display = 'flex';
	setTimeout(function() {
		picture.classList.remove('feedback_anim_right');
	}, 500);
	//меняем цвет точки
	num_of_slide += 1;
	if (num_of_slide == 5) {
		num_of_slide = 0
	}
	for (var i = 0; i < dots.length; i++) {
		dots[i].style.background = '#8b7d7c';
	}
	dots[num_of_slide].style.background = '#ff986b';
});

arrows[0].addEventListener('click', ()=>{
	//двигаем блок влево
	let picture = document.querySelector('.header_name');
	picture.style.display = 'none';
	picture.classList.add('feedback_anim_left');
	picture.style.display = 'flex';
	setTimeout(function() {
		picture.classList.remove('feedback_anim_left');
	}, 500);
	//меняем цвет точки
	num_of_slide -= 1;
	if (num_of_slide == -1) {
		num_of_slide = 4
	}
	for (var i = 0; i < dots.length; i++) {
		dots[i].style.background = '#8b7d7c';
	}
	dots[num_of_slide].style.background = '#ff986b';
})