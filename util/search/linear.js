function linear(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i; // retorna o índice do elemento se encontrado
		}
	}
	return -1; // retorna -1 se o elemento não for encontrado
}

module.exports = linear;
