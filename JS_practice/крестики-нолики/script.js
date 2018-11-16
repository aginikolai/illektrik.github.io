let button = document.querySelector('.button');
let turn = 'player1';
let boxes = document.getElementsByClassName('blocks');
let area = document.querySelector('.container');
let winner;
function play () {


for (var i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener('click', move)
}// end for		

	function move () {
		if (turn == 'player1' && this.innerHTML == '') {
			this.innerHTML = 'X';
			turn = 'player2';
			checkerX();
		} else if (turn == 'player2' && this.innerHTML == '') {
			this.innerHTML = 'O';
			turn = 'player1';
			checkerO();
		}		
	}
		
function checkerX () {
	//проверяет все комбинации, при которых может быть зачеркнуто три крестика
		if ( (boxes[0].innerHTML == 'X' && boxes[4].innerHTML == 'X' && boxes[8].innerHTML == 'X') ||
		     (boxes[2].innerHTML == 'X' && boxes[4].innerHTML == 'X' && boxes[6].innerHTML == 'X') ||
		     (boxes[0].innerHTML == 'X' && boxes[1].innerHTML == 'X' && boxes[2].innerHTML == 'X') ||
		     (boxes[3].innerHTML == 'X' && boxes[4].innerHTML == 'X' && boxes[5].innerHTML == 'X') ||
		     (boxes[6].innerHTML == 'X' && boxes[7].innerHTML == 'X' && boxes[8].innerHTML == 'X') ||
		     (boxes[0].innerHTML == 'X' && boxes[3].innerHTML == 'X' && boxes[6].innerHTML == 'X') ||
		     (boxes[1].innerHTML == 'X' && boxes[4].innerHTML == 'X' && boxes[7].innerHTML == 'X') ||
		     (boxes[2].innerHTML == 'X' && boxes[5].innerHTML == 'X' && boxes[8].innerHTML == 'X') ){
				winner = document.createElement('h1');
				winner.innerHTML = 'Первый игрок<br> выиграл!';
				area.appendChild(winner);
				for (var i = 0; i < boxes.length; i++) {
					boxes[i].removeEventListener('click', move)
				}// end for	
				button.style.opacity = 6;
		}  
		
	}; // end checkerX

function checkerO () {
	//проверяет все комбинации, при которых может быть зачеркнуто три нолика
		if ( (boxes[0].innerHTML == 'O' && boxes[4].innerHTML == 'O' && boxes[8].innerHTML == 'O') ||
		     (boxes[2].innerHTML == 'O' && boxes[4].innerHTML == 'O' && boxes[6].innerHTML == 'O') ||
		     (boxes[0].innerHTML == 'O' && boxes[1].innerHTML == 'O' && boxes[2].innerHTML == 'O') ||
		     (boxes[3].innerHTML == 'O' && boxes[4].innerHTML == 'O' && boxes[5].innerHTML == 'O') ||
		     (boxes[6].innerHTML == 'O' && boxes[7].innerHTML == 'O' && boxes[8].innerHTML == 'O') ||
		     (boxes[0].innerHTML == 'O' && boxes[3].innerHTML == 'O' && boxes[6].innerHTML == 'O') ||
		     (boxes[1].innerHTML == 'O' && boxes[4].innerHTML == 'O' && boxes[7].innerHTML == 'O') ||
		     (boxes[2].innerHTML == 'O' && boxes[5].innerHTML == 'O' && boxes[8].innerHTML == 'O') ){
				winner = document.createElement('h1');
				winner.innerHTML = 'Второй игрок <br> выиграл!';
				area.appendChild(winner);
				for (var i = 0; i < boxes.length; i++) {
					boxes[i].removeEventListener('click', move)
				}
				button.style.opacity = 6;
		}  
		
	}; // end checkerX
} // end play
play();

button.addEventListener('click', function () {
	for (var i = 0; i < boxes.length; i++) {
			boxes[i].innerHTML = ''
	};
	turn = 'player1';
	play();
	winner.innerHTML = '';
	button.style.opacity = 0;

})