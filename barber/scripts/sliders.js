const slide_right = document.querySelector('.fa-caret-right');
const slide_left = document.querySelector('.fa-caret-left');
const decor = document.querySelector('.feedback_slider');
const rombuses = decor.getElementsByTagName('img');
const photo_animation = document.querySelector('.feedback_center');
const txt_animation = document.querySelector('.txt_feedback');
let slide_num = 0;


slide_right.addEventListener('click', () => {
	photo_animation.style.display = 'none';
	txt_animation.style.display = 'none';
	slide_num += 1;
	if (slide_num == 3) {slide_num = 0};
	for (var i = rombuses.length - 1; i >= 0; i--) {
		rombuses[i].src = 'img/slider-indicator.png';
	};
	rombuses[slide_num].src = 'img/current-slider.png';
	photo_animation.classList.add('feedback_anim_right');
	txt_animation.classList.add('photogall_anim');
	photo_animation.style.display = 'block';
	txt_animation.style.display = 'block';
	setTimeout(function() {
				photo_animation.classList.remove('feedback_anim_right');
			}, 500);
	setTimeout(function() {
				txt_animation.classList.remove('photogall_anim');
			}, 500);
});

slide_left.addEventListener('click', () => {
	photo_animation.style.display = 'none';
	txt_animation.style.display = 'none';
	slide_num -= 1;
	if (slide_num == -1) {slide_num = 2};
	for (var i = rombuses.length - 1; i >= 0; i--) {
		rombuses[i].src = 'img/slider-indicator.png';
	};
	rombuses[slide_num].src = 'img/current-slider.png';
	txt_animation.classList.add('photogall_anim');
	photo_animation.classList.add('feedback_anim_left');
	photo_animation.style.display = 'block';
	txt_animation.style.display = 'block';
	setTimeout(function() {
				photo_animation.classList.remove('feedback_anim_left');
			}, 500);
	setTimeout(function() {
				txt_animation.classList.remove('photogall_anim');
			}, 500);
});




