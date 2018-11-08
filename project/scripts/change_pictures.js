const smal_photos = document.querySelectorAll('.project_gallery_photo');
const bigPhoto = document.querySelector('.portfolio_project_photo');
let photoIndex = 0;

smal_photos.indexOf = [].indexOf;
smal_photos.forEach = [].forEach;
smal_photos.forEach( name => {
	name.addEventListener('click', function () {
		photoIndex = smal_photos.indexOf(this) + 1;
		bigPhoto.classList.add('photogall_anim');
		bigPhoto.style.background = `url(images_portfolio/imageBig${photoIndex}.jpg) center / 100% no-repeat`;
		setTimeout(function() {
				bigPhoto.classList.remove('photogall_anim')
			}, 500);
	})
})