const wave = document.querySelector('.intro_info');
wave.addEventListener('mousemove', () => wave.style.background = 'url(images/wave2.png) bottom center no-repeat');
wave.addEventListener('mouseleave', () => wave.style.background = 'url(images/wave.png) center no-repeat');