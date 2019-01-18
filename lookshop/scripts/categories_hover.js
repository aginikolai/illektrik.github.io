 category.forEach( (name) => {
 	name.addEventListener('mousemove', function() {
 		let computedStyle = getComputedStyle(this)

 		if(computedStyle.background == 
 			'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box') {
			this.style.background = '#f2f2f2';
		}
 	});
 	name.addEventListener('mouseleave', function () {
 		 let computedStyle = getComputedStyle(this);
 		 if (computedStyle.backgroundColor != 'rgb(253, 146, 109)') {
 		 	this.style.background = 
 			'rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box'
 		 }
 		
			
		
 	})
	

 });

