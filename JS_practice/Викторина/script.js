//определяем логику первого ответа
let goodAnswer = 0;
function process1 () {
const quest1 = document.querySelector('.question1');
const answer1 = quest1.getElementsByTagName('input');
const quest2 = document.querySelector('.question2');
let ifCorrect = 0;
//узнаем, на сколько ответов кликнул пользователь
for (var i = 0; i < answer1.length; i++) {
	answer1[i].addEventListener('click', function () {
		ifCorrect = 0;
		for (var i = 0; i < answer1.length; i++) {
			if(answer1[i].checked) {
				ifCorrect +=1;
			}
		}
		console.log(ifCorrect)
	})
}
// запускаем процесс ответа на первый вопрос
const next1 = document.querySelector('.button');
next1.addEventListener('click', function () {
	
	if (ifCorrect !=1) {
		alert('Выберете только один вариант ответа')
	} else	if (answer1[1].checked === true) {
		quest1.style.display = 'none';
		quest2.style.display = 'block';
		process2();
		goodAnswer +=1;
	} else {
		quest1.style.display = 'none';
		quest2.style.display = 'block';
		process2();
	} 
   
})
}// end process1 

process1();

function process2 () {
	const quest1 = document.querySelector('.question2');
	const answer1 = quest1.getElementsByTagName('input');
	const quest2 = document.querySelector('.question3');
	let ifCorrect = 0;
//узнаем, на сколько ответов кликнул пользователь
	for (var i = 0; i < answer1.length; i++) {
	answer1[i].addEventListener('click', function () {
		ifCorrect = 0;
		for (var i = 0; i < answer1.length; i++) {
			if(answer1[i].checked) {
				ifCorrect +=1;
			}
		}
		console.log(ifCorrect);
	})
}
// запускаем процесс ответа на первый вопрос
	const next1 = document.querySelector('.button2');
	next1.addEventListener('click', function () {
	console.log('hui pizda')
	if (ifCorrect !=1) {
		alert('Выберете только один вариант ответа')
	} else	if (answer1[2].checked === true) {
		quest1.style.display = 'none';
		quest2.style.display = 'block';
		goodAnswer +=1;
		process3();
	} else {
		quest1.style.display = 'none';
		quest2.style.display = 'block';
		process3();
	} 
   
})
}// end process2

function process3 () {
	const quest1 = document.querySelector('.question3');
	const answer1 = quest1.getElementsByTagName('input');
	
	let ifCorrect = 0;
//узнаем, на сколько ответов кликнул пользователь
	for (var i = 0; i < answer1.length; i++) {
	answer1[i].addEventListener('click', function () {
		ifCorrect = 0;
		for (var i = 0; i < answer1.length; i++) {
			if(answer1[i].checked) {
				ifCorrect +=1;
			}
		}
		console.log(ifCorrect);
	})
}
// запускаем процесс ответа на первый вопрос
	const next1 = document.querySelector('.button3');
	next1.addEventListener('click', function () {
	console.log('hui pizda')
	if (ifCorrect !=1) {
		alert('Выберете только один вариант ответа')
	} else	if (answer1[2].checked === true) {
		quest1.style.display = 'none';
		
		goodAnswer +=1;
		let result = document.querySelector('.main');
		let link = document.createElement('h2');
		link.innerHTML = `Вы ответили правильно на ${goodAnswer} вопросов`;
		result.appendChild(link);
	} else {
		quest1.style.display = 'none';
		let result = document.querySelector('.main');
		let link = document.createElement('h2');
		link.innerHTML = `Вы ответили правильно на ${goodAnswer} вопросов`;
		result.appendChild(link);
	} 
   
})
}// end process2






