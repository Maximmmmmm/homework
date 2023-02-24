const textContent = document.querySelector('.text-content');
const readMore = document.querySelector('.button-readmore');

const fullInner = textContent.innerHTML;

if (textContent.innerHTML.length > 20) {
	let lessText = textContent.innerHTML.slice(0, 20);
	textContent.innerHTML = lessText + '...';

	readMore.addEventListener('click', (event) => {
		if (readMore.innerHTML === 'Read More') {
			textContent.innerHTML = fullInner;
			readMore.innerHTML = 'Read Less';
			readMore.style.color = 'red';
		} else if (readMore.innerHTML === 'Read Less') {
			textContent.innerHTML = lessText + '...';
			readMore.innerHTML = 'Read More';
			readMore.style.color = 'green';
		}
		event.preventDefault();
	});
}