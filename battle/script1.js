
const divs = document.getElementsByClassName('container');
const btn = document.querySelector('.new_game');
let hz = document.querySelector('.shoots');
let howMany = document.querySelector('.numOfShips');
let elseLeft = document.querySelector('.whatElse');
let shootInfo = document.querySelector('.infoBox');
let numberOfTrys = 0;
let numberOfShipsAll = 0;
let num2 = 0, num3 = 0, num4 = 0;
let navy = 10;
let result;
//создаем двумерный массив для определения в какой позиции находится сектор (на нем может быть размещен корабль или пустота)
const battelfield = [
	 [ divs[0], divs[1], divs[2], divs[3], divs[4], divs[5], divs[6], divs[7], divs[8], divs[9] ],
     [ divs[10], divs[11], divs[12], divs[13], divs[14], divs[15], divs[16], divs[17], divs[18], divs[19] ],
	 [ divs[20], divs[21], divs[22], divs[23], divs[24], divs[25], divs[26], divs[27], divs[28], divs[29] ],
	 [ divs[30], divs[31], divs[32], divs[33], divs[34], divs[35], divs[36], divs[37], divs[38], divs[39] ],
	 [ divs[40], divs[41], divs[42], divs[43], divs[44], divs[45], divs[46], divs[47], divs[48], divs[49] ],
	 [ divs[50], divs[51], divs[52], divs[53], divs[54], divs[55], divs[56], divs[57], divs[58], divs[59] ],
	 [ divs[60], divs[61], divs[62], divs[63], divs[64], divs[65], divs[66], divs[67], divs[68], divs[69] ],
	 [ divs[70], divs[71], divs[72], divs[73], divs[74], divs[75], divs[76], divs[77], divs[78], divs[79] ],
	 [ divs[80], divs[81], divs[82], divs[83], divs[84], divs[85], divs[86], divs[87], divs[88], divs[89] ],
	 [ divs[90], divs[91], divs[92], divs[93], divs[94], divs[95], divs[96], divs[97], divs[98], divs[99] ]
];
let x = 0, y = 0, orient = 0 //это две переменные, по которым рандомно получаем местоположение будущего корабля




//setting ships start



function size1 () { 
	let i = 0;
	while (i < 4) {
		x = Math.floor( Math.random() * 10);
		y = Math.floor( Math.random() * 10);
		console.log(x,y);
		if (battelfield[y][x].innerHTML == '') {
			battelfield[y][x].innerHTML = '<p>1</p>';
			if ( (x - 1) > -1 && battelfield[y][x-1].innerHTML == '' ) {battelfield[y][x-1].innerHTML = '<p>X</p>'};
			if ( (x - 1) > -1 && (y - 1) > -1 && battelfield[y-1][x-1].innerHTML == '' ) {battelfield[y-1][x-1].innerHTML = '<p>X</p>'};
			if ( (x - 1) > -1 && (y + 1) < 10 && battelfield[y+1][x-1].innerHTML == '') {battelfield[y+1][x-1].innerHTML = '<p>X</p>'};
			if ( (y + 1) < 10 && battelfield[y+1][x].innerHTML == '' ) {battelfield[y+1][x].innerHTML = '<p>X</p>'};
			if ( (y - 1) > -1 && battelfield[y-1][x].innerHTML == '' ) {battelfield[y-1][x].innerHTML = '<p>X</p>'};
			if ( (x + 1 ) < 10 && (y + 1) < 10 && battelfield[y+1][x+1].innerHTML == '') {battelfield[y+1][x+1].innerHTML = '<p>X</p>'};
			if ( (x + 1 ) < 10 && (y - 1) > -1 && battelfield[y-1][x+1].innerHTML == '') {battelfield[y-1][x+1].innerHTML = '<p>X</p>'};
			if ( (x + 1 ) < 10  && battelfield[y][x+1].innerHTML == '') {battelfield[y][x+1].innerHTML = '<p>X</p>'};
			i += 1;
		} else {
			continue;
		}
	}
};
function size4 () {
	orient = Math.floor( Math.random() * 2);
	if ( orient == 0) {
		x = Math.floor( Math.random() * 7);
		y = Math.floor( Math.random() * 10);
		battelfield[y][x].innerHTML = '<p>4</p>';
		if ( (x - 1) > -1  ) {battelfield[y][x-1].innerHTML = '<p>X</p>'};
		if ( (x - 1) > -1 && (y - 1) > -1 ) {battelfield[y-1][x-1].innerHTML = '<p>X</p>'};
		if ( (x - 1) > -1 && (y + 1) < 10 ) {battelfield[y+1][x-1].innerHTML = '<p>X</p>'};
		if ( (y + 1) < 10 ) {battelfield[y+1][x].innerHTML = '<p>X</p>'};
		if ( (y - 1) > -1 ) {battelfield[y-1][x].innerHTML = '<p>X</p>'};
		battelfield[y][x+1].innerHTML = '<p>4</p>';
		if ( (y + 1) < 10 ) {battelfield[y+1][x+1].innerHTML = '<p>X</p>'};
		if ( (y - 1) > -1 ) {battelfield[y-1][x+1].innerHTML = '<p>X</p>'};
		battelfield[y][x+2].innerHTML = '<p>4</p>';
		if ( (y + 1) < 10 ) {battelfield[y+1][x+2].innerHTML = '<p>X</p>'};
		if ( (y - 1) > -1 ) {battelfield[y-1][x+2].innerHTML = '<p>X</p>'};
		battelfield[y][x+3].innerHTML = '<p>4</p>';
		if ( (y + 1) < 10 ) {battelfield[y+1][x+3].innerHTML = '<p>X</p>'};
		if ( (y - 1) > -1 ) {battelfield[y-1][x+3].innerHTML = '<p>X</p>'};
		if ( (x + 4) < 10  ) {battelfield[y][x+4].innerHTML = '<p>X</p>'};
		if ( (x + 4) < 10 && (y - 1) > -1 ) {battelfield[y-1][x+4].innerHTML = '<p>X</p>'};
		if ( (x + 4) < 10 && (y + 1) < 10 ) {battelfield[y+1][x+4].innerHTML = '<p>X</p>'};
	} else {
		x = Math.floor( Math.random() * 10);
		y = Math.floor( Math.random() * 7);
		battelfield[y][x].innerHTML = '<p>4</p>';
		if ( (y - 1) > -1 ) {battelfield[y-1][x].innerHTML = '<p>X</p>'};
		if ( (y - 1) > -1 && (x - 1) > -1 ) {battelfield[y-1][x-1].innerHTML = '<p>X</p>'};
		if ( (y - 1) > -1 && (x + 1) < 10 ) {battelfield[y-1][x+1].innerHTML = '<p>X</p>'};
		if ( (x - 1) > -1  ) {battelfield[y][x-1].innerHTML = '<p>X</p>'};
		if ( (x + 1) < 10  ) {battelfield[y][x+1].innerHTML = '<p>X</p>'};
		battelfield[y+1][x].innerHTML = '<p>4</p>';
		if ( (x - 1) > -1  ) {battelfield[y+1][x-1].innerHTML = '<p>X</p>'};
		if ( (x + 1) < 10  ) {battelfield[y+1][x+1].innerHTML = '<p>X</p>'};
		battelfield[y+2][x].innerHTML = '<p>4</p>';
		if ( (x - 1) > -1  ) {battelfield[y+2][x-1].innerHTML = '<p>X</p>'};
		if ( (x + 1) < 10  ) {battelfield[y+2][x+1].innerHTML = '<p>X</p>'};
		battelfield[y+3][x].innerHTML = '<p>4</p>';
		if ( (x - 1) > -1  ) {battelfield[y+3][x-1].innerHTML = '<p>X</p>'};
		if ( (x + 1) < 10  ) {battelfield[y+3][x+1].innerHTML = '<p>X</p>'};
		if ( (y + 4) < 10  ) {battelfield[y+4][x].innerHTML = '<p>X</p>'};
		if ( (y + 4) < 10 && (x - 1) > -1 ) {battelfield[y+4][x-1].innerHTML = '<p>X</p>'};
		if ( (y + 4) < 10 && (x + 1) < 10 ) {battelfield[y+4][x+1].innerHTML = '<p>X</p>'};
	}
}
function size3 () {
	let i = 0;
	while (i < 2) {
		orient = Math.floor( Math.random() * 2);
		
		if (orient == 0) {
			x = Math.floor( Math.random() * 8);
			y = Math.floor( Math.random() * 10);
			if (battelfield[y][x].innerHTML =='' && battelfield[y][x+1].innerHTML =='' && battelfield[y][x+2].innerHTML =='') {
				battelfield[y][x].innerHTML ='<p>3</p>';
				if ( (x - 1) > -1 && battelfield[y][x-1].innerHTML == '' ) {battelfield[y][x-1].innerHTML = '<p>X</p>'};
				if ( (x - 1) > -1 && (y - 1) > -1 && battelfield[y-1][x-1].innerHTML == '' ) {battelfield[y-1][x-1].innerHTML = '<p>X</p>'};
				if ( (x - 1) > -1 && (y + 1) < 10 && battelfield[y+1][x-1].innerHTML == '') {battelfield[y+1][x-1].innerHTML = '<p>X</p>'};
				if ( (y + 1) < 10 && battelfield[y+1][x].innerHTML == '' ) {battelfield[y+1][x].innerHTML = '<p>X</p>'};
				if ( (y - 1) > -1 && battelfield[y-1][x].innerHTML == '' ) {battelfield[y-1][x].innerHTML = '<p>X</p>'};
				battelfield[y][x+1].innerHTML ='<p>3</p>';
				if ( (y + 1) < 10 && battelfield[y+1][x+1].innerHTML == '' ) {battelfield[y+1][x+1].innerHTML = '<p>X</p>'};
				if ( (y - 1) > -1 && battelfield[y-1][x+1].innerHTML == '' ) {battelfield[y-1][x+1].innerHTML = '<p>X</p>'};
				battelfield[y][x+2].innerHTML ='<p>3</p>';
				if ( (y + 1) < 10 && battelfield[y+1][x+2].innerHTML =='') {battelfield[y+1][x+2].innerHTML = '<p>X</p>'};
				if ( (y - 1) > -1 && battelfield[y-1][x+2].innerHTML == '' ) {battelfield[y-1][x+2].innerHTML = '<p>X</p>'};
				if ( (x + 3) < 10 && battelfield[y][x+3].innerHTML == ''  ) {battelfield[y][x+3].innerHTML = '<p>X</p>'};
				if ( (x + 3) < 10 && (y - 1) > -1 && battelfield[y-1][x+3].innerHTML == '' ) {battelfield[y-1][x+3].innerHTML = '<p>X</p>'};
				if ( (x + 3) < 10 && (y + 1) < 10 && battelfield[y+1][x+3].innerHTML == '' ) {battelfield[y+1][x+3].innerHTML = '<p>X</p>'};
				i +=1;
				
			}
		} else if (orient == 1) {
			x = Math.floor( Math.random() * 10);
			y = Math.floor( Math.random() * 8);
			if (battelfield[y][x].innerHTML =='' && battelfield[y+1][x].innerHTML =='' && battelfield[y+2][x].innerHTML =='') {
				battelfield[y][x].innerHTML ='<p>3</p>';
				if ( (y - 1) > -1 && battelfield[y-1][x].innerHTML == '' ) {battelfield[y-1][x].innerHTML = '<p>X</p>'};
				if ( (y - 1) > -1 && (x - 1) > -1 && battelfield[y-1][x-1].innerHTML == '' ) {battelfield[y-1][x-1].innerHTML = '<p>X</p>'};
				if ( (y - 1) > -1 && (x + 1) < 10 && battelfield[y-1][x+1].innerHTML == '') {battelfield[y-1][x+1].innerHTML = '<p>X</p>'};
				if ( (x - 1) > -1 && battelfield[y][x-1].innerHTML == '' ) {battelfield[y][x-1].innerHTML = '<p>X</p>'};
				if ( (x + 1) < 10 && battelfield[y][x+1].innerHTML == '' ) {battelfield[y][x+1].innerHTML = '<p>X</p>'};
				battelfield[y+1][x].innerHTML ='<p>3</p>';
				if ( (x - 1) > -1 && battelfield[y+1][x-1].innerHTML == ''  ) {battelfield[y+1][x-1].innerHTML = '<p>X</p>'};
				if ( (x + 1) < 10 && battelfield[y+1][x+1].innerHTML == ''  ) {battelfield[y+1][x+1].innerHTML = '<p>X</p>'};
				battelfield[y+2][x].innerHTML ='<p>3</p>';
				if ( (x - 1) > -1 && battelfield[y+2][x-1].innerHTML == ''  ) {battelfield[y+2][x-1].innerHTML = '<p>X</p>'};
				if ( (x + 1) < 10 && battelfield[y+2][x+1].innerHTML == '' ) {battelfield[y+2][x+1].innerHTML = '<p>X</p>'};
				if ( (y + 3) < 10 && battelfield[y+3][x].innerHTML == '' ) {battelfield[y+3][x].innerHTML = '<p>X</p>'};
				if ( (y + 3) < 10 && (x - 1) > -1 && battelfield[y+3][x-1].innerHTML == '' ) {battelfield[y+3][x-1].innerHTML = '<p>X</p>'};
				if ( (y + 3) < 10 && (x + 1) < 10 && battelfield[y+3][x+1].innerHTML == '' ) {battelfield[y+3][x+1].innerHTML = '<p>X</p>'};
				i +=1;
				
			}
		}
	}
}		
function size2 () {
	let i = 0;
	while (i < 3) {
		orient = Math.floor( Math.random() * 2);
		// orient = 1;
		if (orient == 0) {
			x = Math.floor( Math.random() * 9);
			y = Math.floor( Math.random() * 10);
			if (battelfield[y][x].innerHTML =='' && battelfield[y][x+1].innerHTML =='') {
				battelfield[y][x].innerHTML ='<p>2</p>';
				if ( (x - 1) > -1 && battelfield[y][x-1].innerHTML == '' ) {battelfield[y][x-1].innerHTML = '<p>X</p>'};
				if ( (x - 1) > -1 && (y - 1) > -1 && battelfield[y-1][x-1].innerHTML == '' ) {battelfield[y-1][x-1].innerHTML = '<p>X</p>'};
				if ( (x - 1) > -1 && (y + 1) < 10 && battelfield[y+1][x-1].innerHTML == '') {battelfield[y+1][x-1].innerHTML = '<p>X</p>'};
				if ( (y + 1) < 10 && battelfield[y+1][x].innerHTML == '' ) {battelfield[y+1][x].innerHTML = '<p>X</p>'};
				if ( (y - 1) > -1 && battelfield[y-1][x].innerHTML == '' ) {battelfield[y-1][x].innerHTML = '<p>X</p>'};
				battelfield[y][x+1].innerHTML ='<p>2</p>';
				if ( (y + 1) < 10 && battelfield[y+1][x+1].innerHTML =='') {battelfield[y+1][x+1].innerHTML = '<p>X</p>'};
				if ( (y - 1) > -1 && battelfield[y-1][x+1].innerHTML == '' ) {battelfield[y-1][x+1].innerHTML = '<p>X</p>'};
				if ( (x + 2) < 10 && battelfield[y][x+2].innerHTML == ''  ) {battelfield[y][x+2].innerHTML = '<p>X</p>'};
				if ( (x + 2) < 10 && (y - 1) > -1 && battelfield[y-1][x+2].innerHTML == '' ) {battelfield[y-1][x+2].innerHTML = '<p>X</p>'};
				if ( (x + 2) < 10 && (y + 1) < 10 && battelfield[y+1][x+2].innerHTML == '' ) {battelfield[y+1][x+2].innerHTML = '<p>X</p>'};
				i += 1;
			}
		} else {
			x = Math.floor( Math.random() * 10);
			y = Math.floor( Math.random() * 9);
			if (battelfield[y][x].innerHTML =='' && battelfield[y+1][x].innerHTML =='') {
				battelfield[y][x].innerHTML ='<p>2</p>';
				if ( (y - 1) > -1 && battelfield[y-1][x].innerHTML == '' ) {battelfield[y-1][x].innerHTML = '<p>X</p>'};
				if ( (y - 1) > -1 && (x - 1) > -1 && battelfield[y-1][x-1].innerHTML == '' ) {battelfield[y-1][x-1].innerHTML = '<p>X</p>'};
				if ( (y - 1) > -1 && (x + 1) < 10 && battelfield[y-1][x+1].innerHTML == '') {battelfield[y-1][x+1].innerHTML = '<p>X</p>'};
				if ( (x - 1) > -1 && battelfield[y][x-1].innerHTML == '' ) {battelfield[y][x-1].innerHTML = '<p>X</p>'};
				if ( (x + 1) < 10 && battelfield[y][x+1].innerHTML == '' ) {battelfield[y][x+1].innerHTML = '<p>X</p>'};	
				battelfield[y+1][x].innerHTML ='<p>2</p>';
				if ( (x - 1) > -1 && battelfield[y+1][x-1].innerHTML == ''  ) {battelfield[y+1][x-1].innerHTML = '<p>X</p>'};
				if ( (x + 1) < 10 && battelfield[y+1][x+1].innerHTML == '' ) {battelfield[y+1][x+1].innerHTML = '<p>X</p>'};
				if ( (y + 2) < 10 && battelfield[y+2][x].innerHTML == '' ) {battelfield[y+2][x].innerHTML = '<p>X</p>'};
				if ( (y + 2) < 10 && (x - 1) > -1 && battelfield[y+2][x-1].innerHTML == '' ) {battelfield[y+2][x-1].innerHTML = '<p>X</p>'};
				if ( (y + 2) < 10 && (x + 1) < 10 && battelfield[y+2][x+1].innerHTML == '' ) {battelfield[y+2][x+1].innerHTML = '<p>X</p>'}
				i +=1;
			}
		}
	}
}
//setting ships end



//функция заполняет вс оставшиеся пустые клетки крестиками
function complite () {
	battelfield.forEach( function(name) {
		for (var i = 0; i < name.length; i++) {
			if(name[i].innerHTML == '') {
				name[i].innerHTML = '<p>X</p>'
			} 
		}
	});
	const shoot = document.getElementsByTagName('p');
	for (var i = 0; i < shoot.length; i++) {
		shoot[i].addEventListener('click', gamePlay)
	}
};


//реализуем логику выстрелов - учитываем все возможные варианты попаданий
//плюс изменяем статистику игры при каждом выстреле



function gamePlay () {
	if (this.innerHTML == 'X') {
		this.style.opacity = '0.9';
		numberOfTrys++;
		shootInfo.innerHTML = '<h3 class = "anime">МИМО</h3>';
		console.log(this)
		this.removeEventListener('click', gamePlay);
		
	} else if (this.innerHTML == '1')  {
		this.parentNode.style.background = '#008927FF';
		this.style.opacity = '0.2';
		numberOfTrys++;
		numberOfShipsAll++;
		shootInfo.innerHTML = '<h3 class = "anime">КОРАБЛЬ</h3><h3 class = "anime">ПОТОПЛЕН</h3>';
		this.removeEventListener('click', gamePlay);
	} else if (this.innerHTML == '2')  {
		this.parentNode.style.background = '#7E9835FF';
		this.style.opacity = '0.2';
		numberOfTrys++;
		this.removeEventListener('click', gamePlay);
		if (num2 == 0) {
			num2++;
			shootInfo.innerHTML = '<h3 class = "anime">ПОПАЛ</h3>';
		} else if (num2 == 1) {
			num2 = 0;
			numberOfShipsAll++;
			shootInfo.innerHTML = '<h3 class = "anime">КОРАБЛЬ</h3><h3 class = "anime">ПОТОПЛЕН</h3>';
		}
		console.log(numberOfShipsAll);
	} else if (this.innerHTML == '3') {
		this.parentNode.style.background = '#BD5B36CD';
		this.style.opacity = '0.2';
		numberOfTrys++;
		this.removeEventListener('click', gamePlay);
		if (num3 < 2) {
			num3++;
			shootInfo.innerHTML = '<h3 class = "anime">ПОПАЛ</h3>';
		} else if (num3 == 2) {
			num3 = 0;
			numberOfShipsAll++;
			shootInfo.innerHTML = '<h3 class = "anime">КОРАБЛЬ</h3><h3 class = "anime">ПОТОПЛЕН</h3>';
		}
		
	} else if (this.innerHTML == '4') {
		this.parentNode.style.background = '#F31217D2';
		this.style.opacity = '0.2';
		numberOfTrys++;
		this.removeEventListener('click', gamePlay);
		if (num4 < 3) {
			num4++;
			shootInfo.innerHTML = '<h3 class = "anime">ПОПАЛ</h3>';
		} else if (num4 == 3) {
			num4 = 0;
			numberOfShipsAll++;
			shootInfo.innerHTML = '<h3 class = "anime">КОРАБЛЬ</h3><h3 class = "anime">ПОТОПЛЕН</h3>';
		}
		
	}
	//фиксируем изменение статистики при каждом выстреле
 	hz.innerHTML = numberOfTrys;	
 	howMany.innerHTML = numberOfShipsAll;
 	result = navy - numberOfShipsAll;	
	elseLeft.innerHTML = result;
 	if (result == 0) {
		shootInfo.innerHTML = '<h3 class = "anime">ПОБЕДА!!</h3>';
		btn.style.display = 'block';
		for (var i = 0; i < shoot.length; i++) {
	    	shoot[i].removeEventListener('click', gamePlay)
		};
        
    } else {
    	btn.style.display = 'none';
    }
}



//запускаем функции пострения игрового поля для первой игры
size4();
size3();
size2();
size1();
complite();


//отчищаем игровое поле, обнуляем статистику и запускаем по новой логику игры при нажатии на кнопку "новая игра"
btn.addEventListener('click', function() {
	btn.style.display = 'none';
	shootInfo.innerHTML = '';
	result = 10;
	hz.innerHTML = '0';
	howMany.innerHTML = '0';
	elseLeft.innerHTML = '10';
	numberOfTrys = 0;
	numberOfShipsAll = 0;
	num2 = 0, num3 = 0, num4 = 0;
	navy = 10;
	battelfield.forEach( function(name) {
		for (var i = 0; i < name.length; i++) {
			name[i].innerHTML = '';
			name[i].style.background = '#0094FFFF';
		}
	});
	size4();
	size3();
	size2();
	size1();
	complite();
	
}); 