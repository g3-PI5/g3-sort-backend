//Criar um algoritimo que recebe um array desordenado e o ordena utilizando radix Sort
function radixSort(arr) {
    const radix = 10; // define a base decimal
    let maxLength = false;
    let placement = 1;

    while (!maxLength) {
        maxLength = true;
        let buckets = Array.from({ length: radix }, () => []);

        for (let i = 0; i < arr.length; i++) {
            let num = arr[i] / placement;
            let digit = Math.floor(num % radix);
            buckets[digit].push(arr[i]);
            if (maxLength && num > 0) {
                maxLength = false;
            }
        }

        let idx = 0;
        for (let j = 0; j < radix; j++) {
            let bucket = buckets[j];
            for (let k = 0; k < bucket.length; k++) {
                arr[idx++] = bucket[k];
            }
        }

        placement *= radix;
    }
    return arr;
}
module.exports = radixSort