//Criar um algoritimo que recebe um array desordenado e o ordena utilizando couting Sort
function countingSort(arr, maxVal) {
	let bucket = new Array(maxVal + 1).fill(0);
	let sortedArr = [];

	for (let i = 0; i < arr.length; i++) {
		bucket[arr[i]]++;
	}

	for (let j = 0; j < bucket.length; j++) {
		while (bucket[j] > 0) {
			sortedArr.push(j);
			bucket[j]--;
		}
	}

	return sortedArr;
}

module.exports = countingSort;
