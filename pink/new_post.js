const changeing = document.querySelector('.new_filters');
const inputs = changeing.getElementsByTagName('input');
const filter = document.querySelector('.new_post_filter');
console.log(inputs);

function update () {
	if (inputs.indexOf(this) == 0) {
		filter.style.background = `rgba(${255 - this.value}, 255, 255, .15)`;
	} else if (inputs.indexOf(this) == 1) {
		filter.style.background = `rgba(255, ${255 - this.value}, 255, .15)`;
	} else if (inputs.indexOf(this) == 2) {
		filter.style.background = `rgba(255, 255, ${255 - this.value}, .15)`;
	}
};

inputs.forEach = [].forEach;
inputs.indexOf = [].indexOf;
inputs.forEach( input => input.addEventListener('change', update) );
inputs.forEach( input => input.addEventListener('mousemove', update) );