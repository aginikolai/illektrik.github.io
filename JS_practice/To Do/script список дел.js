
let newTarget = document.querySelector('.ToDo');
const button = document.getElementById('button');
let done = document.querySelector('.done');

button.addEventListener('click', getValue);
button.addEventListener('click', function() {
let text1 = document.querySelector('.target');
text1.value = '';
});


function getValue () {
let text = document.querySelector('.target').value;
let link = document.createElement('h2');

link.innerHTML = text;
newTarget.appendChild(link);
let deal = document.getElementsByTagName('h2');

	for (var i = 0; i < deal.length; i++) {
		deal[i].addEventListener('click', function() {
		this.style.display = 'none';
		},false)

	};
}









