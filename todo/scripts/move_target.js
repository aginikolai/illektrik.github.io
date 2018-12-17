const items = document.querySelector('.items');
let target = 0;
let listOfDeals = [];
let index;
let this_target;
let position_top;
let position_left;

let itemsHeght = 100;
//назначаем обработчики для перетаскиваня элементов внутри блока
let isDown = false;
items.addEventListener('mousedown',  () => isDown = true);
items.addEventListener('mouseup', changingsAfterMousemuve);
items.addEventListener('mousemove', moveTarget); //вертикальное перемещение
items.addEventListener('mousemove', delAndComplite); //горизонтальное перемещение

//события при завершении перетаскивания
function changingsAfterMousemuve () {
	isDown = false;
	target.forEach( (item) => item.style.zIndex = '1');
	correctTop(parseFloat(target[index].style.top));
	check_top = parseFloat(target[index].style.top);

	// корректируем позицию блока, если его опустили слишком низко
	if (parseFloat(target[index].style.top) > (numberOfTargets*50 + 440)) {
		target[index].style.top = `${numberOfTargets * 50 + 450}px`;
	} else if (parseFloat(target[index].style.top) < 460) {
		target[index].style.top = '500px'
	}

	//меняем порядок элементов в массиве localStorage
	let arrayOfTops = [];
	for (var i = 0; i < numberOfTargets; i++) {
		let topForCheck = 500 + 50*i;
		target.forEach( (name) => {
			let elemTop = Math.floor(parseFloat(name.style.top));
			if (elemTop == topForCheck) {
				let needValue = name.getElementsByTagName('p');
				arrayOfTops.push(needValue[0].innerHTML)
			}
		});
	}
	localStorage.setItem('list', arrayOfTops.join(','));
	//корректируем положение по оси Х у всех блоков
	target.forEach( (name) => name.style.left = '50%');

	//проверка на очередность блоков
	items.innerHTML = '';
	makeListOfItems();
};

//определяем, по какому эл-ту был щелчок и какие координаты у этого эл-та
function blockInfo (e) {
	target.indexOf = [].indexOf;
	//задаем параметры для будущего перемещения - какой блок будем перемещать и zIndex;
	index = target.indexOf(this);
	position_top = parseFloat(target[index].style.top);
	target[index].style.zIndex = '10';
	this_target = this.getBoundingClientRect();
	//задаем всем блокам с задачами координату х
	let left  = Math.floor(parseFloat(this_target.left) + parseFloat(this_target.width)/2);
	target.forEach( (name) => name.style.left = `${left -2}px`);
	position_left = parseFloat(target[index].style.left);
	positionX = e.clientX;
};

//логика перетаскивания
function moveTarget (event) {
	let move_down = event.clientY - this_target.top;
	if (isDown && parseFloat(target[index].style.top) > 479) {
		target[index].style.top = (position_top + (event.clientY - this_target.top - 25)) + 'px';
		if (move_down > 10) {
			changePlaseUp();
		} else if(move_down < 10) {
			changePlaseDown();
		} 
	} else if (!isDown) {
		return
	}
};

//перемена блоков местами при перетаскивании
//вверх
function changePlaseUp () {
 	for (var i = target.length - 1; i >= 0; i--) {
 		if ( (parseFloat(target[index].style.top) - parseFloat(target[i].style.top)) < -20 &&
 			 (parseFloat(target[index].style.top) - parseFloat(target[i].style.top)) > -35 ) {
 			target[i].style.top = `${parseFloat(target[i].style.top) - 50}px`
 		} 
 	}
};

//вниз
function changePlaseDown () {
 	for (var i = target.length - 1; i >= 0; i--) {
 		if ( (parseFloat(target[index].style.top) - parseFloat(target[i].style.top)) < 5 &&
 			 (parseFloat(target[index].style.top) - parseFloat(target[i].style.top)) > 0 ) {
 			target[i].style.top = `${parseFloat(target[i].style.top) + 50}px`
 		console.log(parseFloat(target[index].style.top) - parseFloat(target[i].style.top))
 		} 
 	}
};

//выравниваем отступ блока, после завершения перетаскивания
function correctTop(top) {
	let string = String(top);
	let topValue = parseFloat(string[1] + string[2]);
	if (parseFloat(target[index].style.top) < 450) {
		target[index].style.top = '500px'
	} else if ( (100 - topValue) < 30) {
		target[index].style.top = (parseFloat(target[index].style.top) + (100 - topValue)) +'px'
	} else if ( (50 - topValue) < 30 ) {
		target[index].style.top = (parseFloat(target[index].style.top) + (50 - topValue)) +'px'
	} else if ( (50 - topValue) > - 30 ) {
		target[index].style.top = (parseFloat(target[index].style.top) + (50 - topValue)) +'px'
	} else if ( (100 - topValue) > - 30 ) {
		target[index].style.top = (parseFloat(target[index].style.top) + (100 - topValue)) +'px'
	}
};


//Добавляем новые задачи
const btn = document.getElementsByTagName('button');
const input = document.getElementsByTagName('input');
let numberOfTargets = 0;

btn[0].addEventListener('click', addTarget);

function addTarget () {
	
	//получаем текст новой задачи
	let txt = input[0].value;
	let newTarget = document.createElement('div');
	let targetDiscription = document.createElement('p');
	targetDiscription.innerHTML = txt;
	
	//Добаляем div  с новой задачей и присваеваем классы
	newTarget.appendChild(targetDiscription)
	numberOfTargets ++;
	newTarget.classList.add('item_area');
	newTarget.classList.add(`item${numberOfTargets}`);
	
	newTarget.style.top = '500px';
	items.appendChild(newTarget);
	//сдвигаем вниз все предидущие блоки
	if(target.length > 0) {
	      target.forEach( (item, i) => item.style.top = `${500 + i*50}px`) 
	}
	//обновляем обработчик события щелчка по задачи
	target = items.getElementsByTagName('div');
	target.forEach = [].forEach;
	target.indexOf = [].indexOf;
	target.forEach( (item) => item.addEventListener('mousedown', blockInfo));

	//сохраняем новую задачу для массива задач
	listOfDeals.push(input[0].value);
	localStorage.setItem('list', listOfDeals.join(','));
	blocksize = target[0].getBoundingClientRect().left;

	//изменяем высоту блока items
	itemsHeght += 50;
	items.style.height = `${itemsHeght}px`;
	localStorage.setItem('height', itemsHeght);
	input[0].value = '';
} 


// получаем список задач при каждой загрузке страницы

window.addEventListener('load', makeListOfItems);
function makeListOfItems () {
	if (localStorage.getItem('list') !== null) {
		//задаем высоту блока items
		items.style.height = `${parseFloat(localStorage.getItem('height'))}px`;
		itemsHeght = parseFloat(localStorage.getItem('height'));
		let listOf = localStorage.getItem('list').split(',');
		for (var i = 0; i < listOf.length; i++) {
		//получаем текст для задач из массива localStorage
		let txt = listOf[i];
		let newTarget = document.createElement('div');
		let targetDiscription = document.createElement('p');
		targetDiscription.innerHTML = txt;

		//Добаляем div  с новой задачей и присваеваем классы
		newTarget.appendChild(targetDiscription)
		numberOfTargets ++;
		newTarget.classList.add('item_area');
		newTarget.classList.add(`item${numberOfTargets}`);
		
		newTarget.style.top = '500px';
		items.appendChild(newTarget);
		listOfDeals = localStorage.getItem('list').split(',');
	};
	target = items.getElementsByTagName('div');
	target.forEach = [].forEach;
	target.indexOf = [].indexOf;
	
	//сдвигаем вниз все предидущие блоки
	if(target.length > 0) {
	    target.forEach( (item, i) => item.style.top = `${500 + i*50}px`) 
	};
	target.forEach( (item) => item.addEventListener('mousedown', blockInfo));
	this_target = target[0];
	blocksize = target[0].getBoundingClientRect().left;
	}
	//обновляем список выполненных дел
	listOfDone = localStorage.getItem('done').split(',');
};

//добавляем функцию удаления и выполнения задачи
let positonX;
let blocksize;
let listOfDone = [];

function delAndComplite (event) {
	if (isDown) {
		target[index].style.left = (event.clientX + (parseFloat(this_target.width) - positionX) ) + 'px';
		let chekingCoords = target[index].getBoundingClientRect().left;
		// let nextBlockCoords = target[index + 1].getBoundingClientRect().left;
		if ( (chekingCoords - blocksize) < -(this_target.width/1.2) ) {
			//удаляем задачу из списка дел
			isDown = false;
			numberOfTargets--;
			items.removeChild(target[index]);
			for (var i = index; i < target.length; i++) {
				target[i].style.top = `${parseFloat(target[i].style.top) - 50}px`; 
			}
			//обновляем список дел для lockalStore
			listOfDeals = [];
			target.forEach( (name) => {
				let needValue = name.getElementsByTagName('p');
				listOfDeals.push(needValue[0].innerHTML)
			});
			localStorage.setItem('list', listOfDeals.join(','));
			//изменяем высоту блока items
			itemsHeght -= 50;
			items.style.height = `${itemsHeght}px`;
			localStorage.setItem('height', itemsHeght);
		} else if ((chekingCoords - blocksize) > this_target.width/1.5) {
			//добавляем блок в список выполненных
			let needValue = target[index].getElementsByTagName('p');
			listOfDone.push(needValue[0].innerHTML);
			localStorage.setItem('done', listOfDone.join(','));
			//удаляем задачу из списка дел
			isDown = false;
			numberOfTargets--;
			items.removeChild(target[index]);
			for (var i = index; i < target.length; i++) {
				target[i].style.top = `${parseFloat(target[i].style.top) - 50}px`; 
			}
			//обновляем список дел для lockalStore
			listOfDeals = [];
			target.forEach( (name) => {
				let needValue = name.getElementsByTagName('p');
				listOfDeals.push(needValue[0].innerHTML)
			});
			localStorage.setItem('list', listOfDeals.join(','));
			//изменяем высоту блока items
			itemsHeght -= 50;
			items.style.height = `${itemsHeght}px`;
			localStorage.setItem('height', itemsHeght);
		}
	}
}

//переключаемся на список выполненных дел и обратно;
const changeBtn = document.querySelector('.done');
const backBtn = document.querySelector('.back_to_deals');
const toDo = document.querySelector('.list_of_deals');
const doneDeals = document.querySelector('.list_of_done');
const itemsDone = document.querySelector('.items_of_done');

changeBtn.addEventListener('click', () => {
	
		doneDeals.style.display = 'block';
		toDo.style.display = 'none';
		changeBtn.style.display = 'none';
		backBtn.style.display = 'block';
		
		//выстраиваем список выполненных задач
		let listOf = [];
		listOf = localStorage.getItem('done').split(',');
		for (var i = 0; i < listOf.length; i++) {
			let newTarget = document.createElement('p');
			newTarget.innerHTML = listOf[i];
			itemsDone.appendChild(newTarget);
			newTarget.classList.add('done_item');
		}
});
backBtn.addEventListener('click', ()=> {
		doneDeals.style.display = 'none';
		toDo.style.display = 'block';
		changeBtn.style.display = 'block';
		backBtn.style.display = 'none';
		itemsDone.innerHTML = '';
});

//Добавляем всплывающую подсказку
const info = document.querySelector('.fa-exclamation-circle');
const info_block = document.querySelector('.info_block');
info.addEventListener('mousemove', ()=> info_block.style.display = 'block');
info.addEventListener('mouseleave', ()=> info_block.style.display = 'none');
//добавляем возможность нажимать enter
window.addEventListener('keypress', (e) => {
	if (e.keyCode == 13 && input[0].value != 0) {

		addTarget()
	}
})
//не забудь про самую пока что загонную задачу - добавить возможность перемещать блоки при изменении
//направления перетаскивания

//Выводы:
//1. не нужно задавать высоту блоку, который будет создаваться динамически - высота автоматически
//будет меняться сама
//2. любые функции для событий ты создаешь отдельно в именованных ф-ях!!
//3. ты задал изначальный top в виде числа, а надо было в виде переменной - так ты мог бы изменить
//положение блоков выше или ниже