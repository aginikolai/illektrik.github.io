const arrow_right = document.querySelector('.right');
const arrow_left = document.querySelector('.left');
const shake_last = document.querySelector('.feedback3');
const shake_first = document.querySelector('.feedback1');
let moveright = 1;

// обработчик для щелчка вправо
arrow_right.addEventListener('click', function () {
	shake_first.classList.remove('shake_show');
	moveright++;
	if (moveright <= 3) {
		let show_now = document.querySelector('.feedback' + moveright);
		let hide_now = document.querySelector('.feedback' + (moveright - 1));
		show_now.classList.add('feedback_anim_right');
		show_now.style.display = 'block';
		hide_now.classList.remove('feedback_anim_right');
		hide_now.style.display = 'none';
	} else if (moveright == 4) {
		moveright = 3;
		shake_last.classList.add('shake_show');
	}
	
});

// обработчик для щелчка влево
arrow_left.addEventListener('click', function() {
	shake_last.classList.remove('shake_show');
	moveright--;
	if (moveright >=1) {
		let show_now = document.querySelector('.feedback' + moveright);
		let hide_now = document.querySelector('.feedback' + (moveright + 1));
		show_now.classList.add('feedback_anim_left');
		show_now.style.display = 'block';
		hide_now.classList.remove('feedback_anim_left');
		hide_now.style.display = 'none';
	} else if (moveright === 0) {
		moveright = 1;
		shake_first.classList.remove('feedback_anim_left');
		shake_first.classList.add('shake_show');
	}
});


