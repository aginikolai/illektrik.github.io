//определяем логику первого ответа
const screen = document.querySelector('.inputs');
const inputs = screen.getElementsByTagName('h2');
const input = inputs[0];

let a = 0, b = 0;
let operaton = '';

const one = document.querySelector('.calc1');
one.addEventListener('click', function () {
	input.innerHTML += '1';
});

const two = document.querySelector('.calc2');
two.addEventListener('click', function () {
	input.innerHTML += '2';
});

const three = document.querySelector('.calc3');
three.addEventListener('click', function () {
	input.innerHTML += '3';
});

const four = document.querySelector('.calc5');
four.addEventListener('click', function () {
	input.innerHTML += '4';
});

const five = document.querySelector('.calc6');
five.addEventListener('click', function () {
	input.innerHTML += '5';
});

const six = document.querySelector('.calc7');
six.addEventListener('click', function () {
	input.innerHTML += '6';
});

const seven = document.querySelector('.calc9');
seven.addEventListener('click', function () {
	input.innerHTML += '7';
});

const eight = document.querySelector('.calc10');
eight.addEventListener('click', function () {
	input.innerHTML += '8';
});

const nine = document.querySelector('.calc11');
nine.addEventListener('click', function () {
	input.innerHTML += '9';
})
const zero = document.querySelector('.calc13');
zero.addEventListener('click', function () {
	input.innerHTML += '0';
});

const adding = document.querySelector('.calc14');
adding.addEventListener('click', function () {
	a = parseFloat(input.innerHTML);
	input.innerHTML = '';
	operaton = 'adding';
});

const subtraction = document.querySelector('.calc15');
subtraction.addEventListener('click', function () {
	a = parseFloat(input.innerHTML);
	input.innerHTML = '';
	operaton = 'subtraction';
});

const multiplication = document.querySelector('.calc12');
multiplication.addEventListener('click', function () {
	a = parseFloat(input.innerHTML);
	input.innerHTML = '';
	operaton = 'multiplication';
});

const disvision = document.querySelector('.calc8');
disvision.addEventListener('click', function () {
	a = parseFloat(input.innerHTML);
	input.innerHTML = '';
	operaton = 'disvision';
});

const result = document.querySelector('.calc16');	
result.addEventListener('click', function() {
	if (operaton == 'adding') {
		b = parseFloat(input.innerHTML);
		input.innerHTML = a + b;
	} else if (operaton == 'subtraction') {
		b = parseFloat(input.innerHTML);
		input.innerHTML = a - b;
	} else if (operaton == 'multiplication') {
		b = parseFloat(input.innerHTML);
		input.innerHTML = a * b;
	} else if (operaton == 'disvision') {
		b = parseFloat(input.innerHTML);
		input.innerHTML = a / b;
	} 
});

const reset = document.querySelector('.calc4');
reset.addEventListener('click', function () {
	input.innerHTML = '';
	a = 0;
	b = 0;
	operaton = '';
})

   // после клика по + или - и тп, привязать тип действия к 
   // переменной и в равно добавить логику, какое действие производить на основании этой пременной