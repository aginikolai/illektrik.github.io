const move_right = document.querySelector('.fa-angle-right');
const move_left = document.querySelector('.fa-angle-left')
const photo = document.querySelector('.carusel');
let photo_num = 1;

const dots = document.querySelectorAll('.menu_dots__div');
dots[0].style.background = '#504d4c';
let num_of_slide = 0;

move_right.addEventListener('click', function () {
	photo_num < 10 ? photo_num += 1 : photo_num = 1;
	photo.classList.add('feedback_anim_right');
	move_right.style.opacity = 0;
	move_left.style.opacity = 0;

	photo.style.background = `url(imgs/img${photo_num}.jpg)`;
	photo.style.backgroundSize ='cover';
	
	setTimeout(function() {
		photo.classList.remove('feedback_anim_right');
		move_right.style.opacity = 1;
		move_left.style.opacity = 1;
	}, 500);

	num_of_slide += 1;
	if (num_of_slide == 10) {
		num_of_slide = 0
	}
	for (var i = 0; i < dots.length; i++) {
		dots[i].style.background = '#8b7d7c';
	}
	dots[num_of_slide].style.background = '#504d4c';
})

move_left.addEventListener('click', function () {
	photo_num > 1 ? photo_num -= 1 : photo_num = 10;
	photo.classList.add('feedback_anim_left');
	move_right.style.opacity = 0;
	move_left.style.opacity = 0;
	
	photo.style.background = `url(imgs/img${photo_num}.jpg)`;
	photo.style.backgroundSize ='cover';

	setTimeout(function() {
		photo.classList.remove('feedback_anim_left');
		move_right.style.opacity = 1;
		move_left.style.opacity = 1;
	}, 500);

	num_of_slide -= 1;
	if (num_of_slide == -1) {
		num_of_slide = 9
	}
	for (var i = 0; i < dots.length; i++) {
		dots[i].style.background = '#8b7d7c';
	}
	dots[num_of_slide].style.background = '#504d4c';
})