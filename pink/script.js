
const menu_disapear = document.querySelector('.menu_tablet_open');
const menu_close = document.querySelector('.menu_tablet_close');
const tablet_menu = document.querySelector('.menu_tablet_open');
const space = document.querySelector('.space_for_menu');
const menu_open = document.querySelector('.tablet_open');

menu_close.addEventListener('click', function() {
	menu_disapear.style.display = 'none';
	space.style.display = 'none'
});

menu_open.addEventListener('click', function() {
	menu_disapear.style.display = 'block';
	space.style.display = 'block';

});



// for mobile fersion
const mob_button = document.querySelector('.mob_menu_button');
const mob_close = document.querySelector('.menu_mobile_close');
const mob_disapear = document.querySelector('.menu_open_mobile');
const space_open = document.querySelector('.space_for_menu_mobile');
const mob_open = document.querySelector('.menu_mobile_open_burger');

mob_close.addEventListener('click', function () {
	mob_disapear.style.display = "none";
	space_open.style.display = 'none';
	mob_button.style.display = 'none';
});
mob_open.addEventListener('click', function () {
	mob_disapear.style.display = "block";
	space_open.style.display = 'block';
	mob_button.style.display = 'block';
});


// feedback slider for desctop

//backgrund for arrows
const arrow_block = document.querySelector('.feedback_main');
const arrows = arrow_block.getElementsByTagName('div');
for (var i = 0; i < arrows.length; i++) {
	if ( i == 0 || i == 4 ) {
		arrows[i].addEventListener('mouseover', function() {
			this.style.background = '#e5e5e5';
		});
		arrows[i].addEventListener('mouseout', function () {
			this.style.background = 'white';
		})
	}
};


//moveright
let moveright = 1;
let shake_chek = 0;
arrows[4].addEventListener('click', function () {
		arrows[1].classList.remove('shake_show');
	    moveright++;
	if (moveright > 3) {
		moveright = 3;
		shake_chek = 1;
	 }
	if (moveright < 4) {

		let show_now = document.querySelector('.feedback' + moveright);
		let hide_now = document.querySelector('.feedback' + (moveright - 1));
		show_now.classList.remove('feedback_anim_left');
		show_now.classList.add('feedback_anim_right');
		show_now.style.display = 'block';
		hide_now.style.display = 'none';
		if ( shake_chek == 1) {
			show_now.className  += " shake_show";
			shake_chek = 0;
			
			//нужно удалить класс shake_show!!!
		} 

	};
	console.log(moveright);
});
//moveleft
arrows[0].addEventListener('click', function () {
		
		arrows[3].classList.remove('shake_show');
		moveright--;
	if (moveright < 1) {
		moveright = 1;
		shake_chek = 1;
	};
	if (moveright > 0) {
		let show_now = document.querySelector('.feedback' + moveright);
		let hide_now = document.querySelector('.feedback' + (moveright + 1));
		show_now.classList.remove('feedback_anim_right');
		show_now.classList.add('feedback_anim_left');
		show_now.style.display = 'block';
		hide_now.style.display = 'none';
		if ( shake_chek == 1) {
			show_now.className  += " shake_show";
			shake_chek = 0;
			
		};
	};
	console.log(moveright);
});


//table for mobile

const table = document.querySelector('.table_content_mobile');
const tableCoords = table.getBoundingClientRect();
let position;
let moveLeft = 0;

table.addEventListener('mousedown', function (event) {
	position = event.clientX;

	table.addEventListener('mousemove', tableMove);
	document.addEventListener('mouseup', function() {
    	table.removeEventListener('mousemove', tableMove);
    });
});

function tableMove (e) {
	 
	 let positionChange = e.clientX;
	 if ( parseFloat(positionChange) < parseFloat(position)) {
	 	moveLeft -= 230;
	 	if (moveLeft > -470 ) {
	 		table.style.marginLeft = `${moveLeft}px`;
			table.removeEventListener('mousemove', tableMove);
	 	} else {
	 		table.style.marginLeft = '-460px';
	 		moveLeft = -460;
	 	}
		
	 } else if ( parseFloat(positionChange) > parseFloat(position)) {
	 	moveLeft += 230;
	 	if ( moveLeft <= 0) {
	 		table.style.marginLeft = `${moveLeft}px`;
			table.removeEventListener('mousemove', tableMove);
			console.log(moveLeft)
	 	} else {
	 		table.style.marginLeft = '10px';
	 		moveLeft = 0;
	 	}
	 	
	 }
}







