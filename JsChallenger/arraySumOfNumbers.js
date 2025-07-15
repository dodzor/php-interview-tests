/**
 * Write a function that takes an array of numbers as argument.
 * It should return the sum of the numbers.
*/

function sumOfNumbersArr(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfNumbersArr([1, 2, 3, 4, 5])); // 15
console.log(sumOfNumbersArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
