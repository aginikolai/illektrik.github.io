const changeing = document.querySelector('.new_filters');
const inputs = changeing.getElementsByTagName('input');
const filter = document.querySelector('.new_post_filter');
var red = 255;
var blue = 255;
var green = 255;
console.log(inputs);

function update () {
	if (inputs.indexOf(this) == 0) {
		red = 255 - this.value;
		filter.style.background = `rgba( ${red} , ${green}, ${blue}, .15)`;
	} else if (inputs.indexOf(this) == 1) {
		green = 255 - this.value;
		filter.style.background = `rgba( ${red} , ${green}, ${blue}, .15)`;
	} else if (inputs.indexOf(this) == 2) {
		blue = 255 - this.value;
		filter.style.background = `rgba( ${red} , ${green}, ${blue}, .15)`;
	}
};

inputs.forEach = [].forEach;
inputs.indexOf = [].indexOf;
inputs.forEach( input => input.addEventListener('change', update ) );
inputs.forEach( input => input.addEventListener('mousemove', update) );