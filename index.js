function mapgen(width, height) {
	let result = '';
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			if (x === width - 1 && y === height - 1)
				result += '.';
			else
				result += ['M', 'F', '#', '.'][Math.floor(Math.random() * 4)];
		}
		result += '\n';
	}
	return result;
}

// Browser
if (typeof(window) === 'object')
	window.mapgen = mapgen;

// Node.js
if (typeof(module) === 'object')
	module.exports = mapgen;
