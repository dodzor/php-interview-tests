/**
 * Write a function that takes an array (a) and a value (b) as argument.
 * Remove all occurences of b from a.
 * Return the filtered array.
*/

function removeArrElem(a, b) {
    return a.filter(item => item !== b);
}

console.log(removeArrElem([1, 2, 3, 4, 5], 2)); // [1, 3, 4, 5]
console.log(removeArrElem([1, 2, 3, 4, 5], 3)); // [1, 2, 4, 5]
