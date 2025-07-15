/**
 * Write a function that takes an array of strings as argument.
 * Return the longest string.
*/

function longestStringFromArr(arr) {
    return arr.reduce((a, b) => a.length > b.length ? a : b);
}

console.log(longestStringFromArr(['help', 'me'])); // help
console.log(longestStringFromArr(['I', 'need', 'candy'])); // candy