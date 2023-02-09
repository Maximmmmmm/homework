const parent = document.querySelector('.container');

function createElement(tag, properties, styles, parentElement, tableSize = NaN) {
	let newElem = document.createElement(tag);

	if (tag == 'table') {
		for (let i = 0; i < tableSize[0]; i++) {
			let newRow = document.createElement('tr');
			let columns = [];
			for (let i = 0; i < tableSize[1]; i++) {
				columns.push(`<td>${i}</td>`)
			};
			newRow.innerHTML = columns.join('');
			newElem.append(newRow);
		}
	};

	properties.forEach(function(propertie) {
		newElem[propertie[0]] = propertie[1];
	});

	styles.forEach(function(item) {
		newElem.style[item[0]] = item[1];
	});

	parentElement.append(newElem);
};

createElement(tag = 'div', properties = [['className','elem first-block'],['innerHTML','Lebra shveps']], styles = [['color','orange'],['fontFamily','Arial'],['fontSize','40px']], parentElement = parent);
createElement(tag = 'table', properties = [['className','table']], styles = [['borderCollapse','collapse']], parentElement = parent, tableSize = [3,4]);
