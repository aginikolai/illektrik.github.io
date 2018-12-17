const target = document.querySelector('.for_hover')
const change = document.querySelectorAll('.news_body__left_div--back');
const targets = target.getElementsByTagName('p');

let num = null;
targets.forEach = [].forEach;

targets.forEach( (name, i) => {
	name.addEventListener('mousemove', () => {
		num = i;
		change[num].style.background = 'url(img/event_hover.png) left 5px no-repeat'
	})
})

targets.forEach( (name, i) => {
	name.addEventListener('mouseleave', () => {
		num = i;
		change[num].style.background = 'url(img/event_back.png) left 5px no-repeat'
	})
})


