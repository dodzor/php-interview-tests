/**
 * Write a function that takes an array of numbers as argument.
 * Return the number of negative values in the array.
*/

function arrayCountNegativeNum(arr) {
    return arr.filter(item => item < 0).length;
}

console.log(arrayCountNegativeNum([1, 2, 3, 4, 5])); // 0
console.log(arrayCountNegativeNum([1, -2, 3, 4, 5])); // 1
console.log(arrayCountNegativeNum([1, 2, -3, 4, -5])); // 2
