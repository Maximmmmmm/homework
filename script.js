const player = document.querySelector('#player');
const field = document.querySelector('.maze-field');
const score = document.querySelector('#score');

let playerPos = {
	x: 0,
	y: 0
}
let startPos = {
	x: 0,
	y: 0
}
let wallSize = 25

let template = [
	['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
	['1','0','0','0','0','0','0','0','0','0','0','1','0','1','0','0','0','0','1'],
	['1','1','1','1','1','0','1','1','1','1','0','1','0','1','0','1','0','0','1'],
	['1','0','0','0','0','0','1','0','0','0','0','1','0','1','0','0','0','0','1'],
	['1','0','1','1','1','1','1','0','1','1','1','1','0','0','0','0','0','0','1'],
	['1','0','1','0','0','0','0','0','1','0','1','1','0','1','1','0','0','0','1'],
	['1','0','1','0','1','1','1','1','1','0','1','1','0','1','0','0','1','1','1'],
	['1','0','1','0','0','0','0','0','0','0','0','0','0','1','0','0','0','0','1'],
	['1','P','1','1','1','1','1','1','1','1','1','1','1','1','1','0','1','0','1'],
	['1','0','1','0','0','0','1','0','1','0','0','0','1','0','0','0','1','0','1'],
	['1','0','1','0','0','0','1','0','0','0','0','0','1','0','0','0','1','1','1'],
	['1','0','1','1','1','0','0','0','0','0','1','0','0','0','0','0','0','0','1'],
	['1','0','0','0','1','1','0','1','1','1','1','1','1','1','1','1','0','0','1'],
	['1','0','1','0','0','1','0','0','0','0','0','0','0','0','0','1','1','0','1'],
	['1','0','1','1','0','1','1','1','1','1','1','1','1','1','0','1','1','1','1'],
	['1','0','1','0','0','0','0','0','0','0','0','0','0','1','0','1','1','0','1'],
	['1','0','1','1','1','1','1','1','1','1','1','0','0','1','0','0','0','0','1'],
	['1','0','1','0','0','0','1','0','0','0','1','0','0','1','1','1','1','F','1'],
	['1','0','0','0','1','0','0','0','1','0','1','1','0','0','1','0','0','0','1'],
	['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
]

template.forEach(function(row, rowIndex, arr) {

	row.forEach(function(col, colIndex, rowArr) {
		let x = colIndex * wallSize;
		let y = rowIndex * wallSize;

		if (col == '1') {
			let wall = document.createElement('div');
			wall.classList.add('wall');
			wall.style.left = x + 'px';
			wall.style.top = y + 'px';
			field.append(wall);
		}
		if (col == 'P') {
			playerPos.x = colIndex
			playerPos.y = rowIndex

			player.style.left = playerPos.x * wallSize + 'px';
			player.style.top = playerPos.y * wallSize + 'px';

			startPos.x = playerPos.x
			startPos.y = playerPos.y
		}
		if (col == 'F') {
			let finish = document.createElement('div');
			finish.classList.add('wall');
			finish.style.backgroundColor = 'yellow';
			finish.style.left = x + 'px';
			finish.style.top = y + 'px';
			field.append(finish);
		}
	});
});

document.addEventListener('keydown', function (event) {
	if (event.code === 'KeyW') {
		if (template[playerPos.y - 1][playerPos.x] != '1') {
			playerPos.y -= 1
		}
	}
	if (event.code === 'KeyA') {
		if (template[playerPos.y][playerPos.x - 1] != '1') {
			playerPos.x -= 1
		}
	}
	if (event.code === 'KeyD') {
		if (template[playerPos.y][playerPos.x + 1] != '1') {
			playerPos.x += 1
		}
	}
	if (event.code === 'KeyS') {
		if (template[playerPos.y + 1][playerPos.x] != '1') {
			playerPos.y += 1
		}
	}

	if (template[playerPos.y][playerPos.x] == 'F') {
		score.innerHTML = +score.innerHTML + 1
		playerPos.x = startPos.x
		playerPos.y = startPos.y
	}

	player.style.left = playerPos.x * wallSize + 'px';
	player.style.top = playerPos.y * wallSize + 'px';
});