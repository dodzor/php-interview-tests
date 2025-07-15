/**
 * Write a function that takes an array (a) and a number (n) as arguments.
 * Save every nth element in a new array.
 * Return the new array.
*/

function getNthElemArray(arr, n) {
    // let result = [];
    // arr.forEach((elem, i) => {
    //     if ((i + 1) % n === 0) {
    //         result.push(elem);
    //     }
    // })
    // return result;

    return arr.filter((_, i) => (i + 1) % n === 0);
}

console.log(getNthElemArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // [3, 6, 9]
console.log(getNthElemArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 2)); // ['b', 'd', 'f', 'h', 'j']
console.log(getNthElemArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
