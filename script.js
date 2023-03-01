const arrowTop = document.querySelector('#arrowTop');
const arrowBottom = document.querySelector('#arrowDown');
const body = document.querySelector('body');

window.addEventListener('scroll', () => {
	if (window.scrollY > body.offsetHeight/2) {
		arrowBottom.setAttribute('hidden','');
		arrowTop.removeAttribute('hidden');
	} else if (window.scrollY < body.offsetHeight/2) {
		arrowBottom.removeAttribute('hidden');
		arrowTop.setAttribute('hidden','');
	}
});

arrowTop.addEventListener('click', (event) => {
	window.scroll({
		left: 0,
		top: 0,
		behavior: 'smooth'
	});
});
arrowDown.addEventListener('click', (event) => {
	window.scroll({
		left: 0,
		top: body.offsetHeight,
		behavior: 'smooth'
	});
});