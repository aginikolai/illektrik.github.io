const carusel = document.querySelector('.carosel_buttons');
const change_slide = carusel.getElementsByTagName('button');
const dot1 = document.querySelector('.area1');
const dot2 = document.querySelector('.area2');

const slider = document.querySelector('.intro_carosel');
const change_h1 = slider.getElementsByTagName('h1');
const change_h2 = slider.getElementsByTagName('h2');

let slideIndex = 1;


change_slide[1].addEventListener('click', function() {
		if (slideIndex == 1) {
			slider.classList.add('carosel_anim_right');
			change_h1[0].innerHTML = 'Design & Branding';
			change_h2[0].innerHTML = 'we deliver quality results';
			dot1.style.border = 'none';
			dot1.style.height = '14px';
			dot1.style.width = '14px';
			dot2.style.border = '5px solid black';
			dot2.style.height = '8px';
			dot2.style.width = '8px';
			slider.style.background = 'url(images/shutterstock_433009291.jpg) center / 100%  no-repeat,#d8d9d8';
			 setTimeout(function() {
				slider.classList.remove('carosel_anim_right')
			}, 1000);
			slideIndex = 2;
		} else if (slideIndex == 2) {
			slider.classList.add('carosel_anim_right');
			change_h1[0].innerHTML = 'lian creative agency';
			change_h2[0].innerHTML = 'minimal freelance portfolio';
			dot2.style.border = 'none';
			dot2.style.height = '14px';
			dot2.style.width = '14px';
			dot1.style.border = '5px solid black';
			dot1.style.height = '8px';
			dot1.style.width = '8px';
			slider.style.background = 'url(images/shutterstock_3532000732.png) right center/ 100% no-repeat';
			slideIndex = 1;
			setTimeout(function() {
				slider.classList.remove('carosel_anim_right')
			}, 1000);
			
		}
});

change_slide[0].addEventListener('click', function() {
		if (slideIndex == 1) {
			slider.classList.add('carosel_anim_left');
			change_h1[0].innerHTML = 'Design & Branding';
			change_h2[0].innerHTML = 'we deliver quality results';
			dot1.style.border = 'none';
			dot1.style.height = '14px';
			dot1.style.width = '14px';
			dot2.style.border = '5px solid black';
			dot2.style.height = '8px';
			dot2.style.width = '8px';
			slider.style.background = 'url(images/shutterstock_433009291.jpg) right center/ 100% no-repeat';
			 setTimeout(function() {
				slider.classList.remove('carosel_anim_left')
			}, 1000);
			slideIndex = 2;
		} else if (slideIndex == 2) {
			slider.classList.add('carosel_anim_left');
			change_h1[0].innerHTML = 'lian creative agency';
			change_h2[0].innerHTML = 'minimal freelance portfolio';
			dot2.style.border = 'none';
			dot2.style.height = '14px';
			dot2.style.width = '14px';
			dot1.style.border = '5px solid black';
			dot1.style.height = '8px';
			dot1.style.width = '8px';
			slider.style.background = 'url(images/shutterstock_3532000732.png) center/ 100%  no-repeat,#d8d9d8';
			slideIndex = 1;
			setTimeout(function() {
				slider.classList.remove('carosel_anim_left')
			}, 1000);
			
		}
	})



