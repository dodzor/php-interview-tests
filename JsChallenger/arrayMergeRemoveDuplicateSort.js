/**
 * Write a function that takes two arrays as arguments.
 * Merge the two arrays and remove duplicate values.
 * Sort the merged array in ascending order.
 * Return the resulting array.
*/

function arrayMergeRemoveDuplicateSort(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

console.log(arrayMergeRemoveDuplicateSort([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(arrayMergeRemoveDuplicateSort([-10, 22, 13, 4, 5], [5, 6, 7, 8])); // [-10, 4, 5, 6, 7, 8, 13, 22]
