/**
 * Write a function that takes arguments an arbitrary number of arrays.
 * It should return an array containing the values of all arrays.
*/

function arrayMerge(...arr) {
    return arr.flat();
}

console.log(arrayMerge([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(arrayMerge([1, 2, 3], [4, 5, 6], [7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
