/**
 * Write a function that takes an array (a) as argument.
 * Return true if all elements in the array are equal.
 * Return false otherwise.
*/

function arrayCheckElemEqual(arr) {
    // a Set is a collection of unique values
    return new Set(arr).size === 1;

    // return arr.every(item => item === arr[0]);
}

console.log(arrayCheckElemEqual([1, 1, 1, 1])); // true
console.log(arrayCheckElemEqual([1, 1, 1, 2])); // false
console.log(arrayCheckElemEqual([true, true, true, true])); // true
console.log(arrayCheckElemEqual([true, true, false, true])); // false
