/** 
 * Write a func that takes an array with a arbitrary number of elements and a number as an arguments.
 * Return a new array, the first element should be either the given number itself 
 * or zero if the number is smaller that 6.
 * The other elements should be the elements of the original array.
 * Try not to mutate the original array.
*/

function arrayWConditionalElem(arr, num) {
    return [num < 6 ? 0 : num, ...arr];
}

console.log(arrayWConditionalElem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // [10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arrayWConditionalElem(['a', 'b', 'c'], 3)); // [0, 'a', 'b', 'c']
console.log(arrayWConditionalElem([null, false], 11)); // [11, null, false]