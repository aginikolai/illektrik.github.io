const range_area = document.querySelector('.range');
const coords = range_area.getBoundingClientRect();
const area = document.querySelector('.products_right');
const line = document.querySelector('.range_choice');

const price_right_val = document.querySelector('.right_price_value');
const price_left_val = document.querySelector('.left_price_value');

let isDown = false;
const change_btn = document.querySelectorAll('.range_btn');
change_btn[0].style.left = '0px';
change_btn[1].style.left = '50px';
change_btn[1].addEventListener('mousedown', ()=> isDown = true);
area.addEventListener('mouseup', ()=> isDown = false);
window.addEventListener('mousemove', btn_changing);
area.addEventListener('mouseleave', ()=>{isDown=false, isDown_left=false})


//функция для перемещения правого ползунка и изменения длинны оранжевой полосы
function btn_changing (e) {
	if (isDown == true) {
		change_btn[1].style.left = (parseFloat(e.clientX) - parseFloat(coords.left) - 9) + 'px';
		line.style.width = (parseFloat(change_btn[1].style.left) - 
			parseFloat(change_btn[0].style.left)) + 'px';
		//если правый ползунок приблизился к левому
		if (parseFloat(change_btn[1].style.left) - parseFloat(change_btn[0].style.left) <=25) {
			change_btn[1].style.left = (parseFloat(change_btn[0].style.left) + 25) + 'px';
			line.style.width = '25px'
		} 
		//если правый ползунок вышел за границы
		else if ( (coords.right - e.clientX) <= 1 ) {
			change_btn[1].style.left = (coords.right - coords.left - 8) + 'px';
			line.style.width = (parseFloat(change_btn[1].style.left) - 
				parseFloat(change_btn[0].style.left) ) + 'px';
		}
		//логика для изменения значений цены.
		price_right_val.innerHTML =  
		 `${Math.floor((e.clientX - coords.left) / ((coords.right - coords.left)/100 ))}`;
	}	 
}


let isDown_left = false;
change_btn[0].addEventListener('mousedown', () => isDown_left = true);
area.addEventListener('mouseup', () => isDown_left = false);
window.addEventListener('mousemove', btn_changing_left);

//функция для перемещения левого ползунка

function btn_changing_left (e) {
	if (isDown_left == true) {
		line.style.left = (parseFloat(change_btn[0].style.left) + 5) + 'px';
		line.style.width = (parseFloat(change_btn[1].style.left) - 
			parseFloat(change_btn[0].style.left)) + 'px';
		change_btn[0].style.left = (parseFloat(e.clientX) - parseFloat(coords.left) - 9) + 'px';
		//если левый ползунок приблизился к правому
		if (parseFloat(change_btn[1].style.left) - parseFloat(change_btn[0].style.left) <=25) {
			change_btn[0].style.left = (parseFloat(change_btn[1].style.left) - 25) + 'px';
		} 
		///если левый полззунок вышел за границы
		else if (parseFloat(change_btn[0].style.left) <=-1) {
			change_btn[0].style.left = '0px';
		}
		//логика для изменения значений цены.
		price_left_val.innerHTML = 
		 `${Math.floor((e.clientX - coords.left) / ((coords.right - coords.left)/100 ))}`;
		
	}
}



	
	

