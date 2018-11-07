const play_stop = document.querySelector('.play_stop');
const play_btn = document.querySelector('.fa-play');
const stop_btn = document.querySelector('.fa-pause');
let isPaly = false;

play_stop.addEventListener('click', function () {
	if (!isPaly) {
		play_btn.style.display = 'none';
		stop_btn.style.display = 'block';
		isPaly = true;
	} else {
		play_btn.style.display = 'block';
		stop_btn.style.display = 'none';
		isPaly = false;
	}
	
})