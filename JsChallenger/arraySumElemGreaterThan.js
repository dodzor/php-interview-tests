/**
 * Write a function that takes an array and a number (n) as arguments.
 * Sum up all array elements with a value greater than n.
 * Return the sum.
*/

function sumArrayElemGreaterThan(arr, n) {
    // return arr.filter(elem => elem > n).reduce((acc, curr) => acc + curr, 0);
    return arr.reduce((sum, curr) => curr > n ? sum + curr : sum, 0);
}

console.log(sumArrayElemGreaterThan([1, 2, 3, 4, 5], 2)); // 12
console.log(sumArrayElemGreaterThan([1, 2, 3, 4, 5], 3)); // 9