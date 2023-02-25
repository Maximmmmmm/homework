function startDrag(event) {
    event.target.classList.add('selected');
	event.dataTransfer.setData('html', event.target.innerHTML);
}

function endDrag(event) {
	const selectedElement = document.querySelector('.selected');
	selectedElement.classList.remove('selected');
}

function enterDrag(event) {
    const selectedElement = document.querySelector('.selected');
	const dragendElement = event.target.closest('div')
    if (dragendElement !== selectedElement){
        event.target.classList.add('drop');
    }
}

function leaveDrag(event) {
    const latestElement = document.querySelector('.drop');
    if (latestElement !== null) {
        latestElement.classList.remove('drop');
    }
}

function drop(event) {
    const dropPoint = document.querySelector('.drop');
    const selectedElement = document.querySelector('.selected');
    if (dropPoint !== null) {
        let dropPointInner = dropPoint.innerHTML
        dropPoint.classList.remove('drop');
        dropPoint.innerHTML = event.dataTransfer.getData('html');
        selectedElement.innerHTML = dropPointInner
    }
}

const divList = document.querySelectorAll('#draggable');

for (div of divList) {
    div.addEventListener('dragover', (event) => {
        event.preventDefault();
    });
	div.addEventListener('dragstart', startDrag);
    div.addEventListener('dragenter', enterDrag);
    div.addEventListener('dragleave', leaveDrag);
    div.addEventListener('dragend', endDrag);
    div.addEventListener('drop', drop);
}