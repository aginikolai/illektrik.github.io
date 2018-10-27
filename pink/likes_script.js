const block = document.querySelector('.panorama_right');
const like = block.getElementsByTagName('img');
const likeValue = block.getElementsByTagName('span');
let likePush = 0;
let num = parseFloat(likeValue[0].innerHTML);

//лайк для панорамы
like[0].addEventListener('click', function() {
	if (likePush == 0) {
		like[0].src = 'images_photo/icon-heart-fill.png';
		like[0].classList.add('like_animation');
		likePush = 1;
		likeValue[0].innerHTML = num + 1;
	} else if (likePush == 1) {
		like[0].src = 'images_photo/icon-heart.png';
		like[0].classList.add('like_animation');
		likePush = 0;
		likeValue[0].innerHTML = num;
	}
});

//лайки для галлереи
const galleryLike = document.querySelectorAll('.gallery_like-icon');
const gallery_all = document.querySelector('.gallery');
const galleryLikeValue = gallery_all.getElementsByTagName('span');
galleryLike.indexOf = [].indexOf;
galleryLike.forEach = [].forEach;

let photoArray = [];
galleryLike.forEach( () => photoArray.push(0));

for (var i = 0; i < galleryLike.length; i++) {
	galleryLike[i].addEventListener('click', function () {
		let check = galleryLike.indexOf(this);
		let num = parseFloat(galleryLikeValue[check].innerHTML);
		if ( photoArray[check] == 0) {
			photoArray[check] = 1;
			this.src = 'images_photo/icon-heart-fill.png';
			this.classList.add('like_animation');
			galleryLikeValue[check].innerHTML = num + 1;
		} else {
			photoArray[check] = 0;
			this.src = 'images_photo/icon-heart.png';
			this.classList.add('like_animation');
			galleryLikeValue[check].innerHTML = num - 1;
		}
	});
}
