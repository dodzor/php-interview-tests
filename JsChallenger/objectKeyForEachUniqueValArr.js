/**
 * Write a function that takes an array of numbers as argument. 
 * Convert the array to an object. 
 * It should have a key for each unique value of the array. 
 * The corresponding object value should be the number of times the key occurs within the array.
 */

// creates a frequency counter/histogram
function objectKeyForEachUniqueValArr(arr) {

    // let obj = {};

    // arr.forEach(num => {
    //     obj[num] = (obj[num] || 0) + 1;
    // });

    // return obj;

    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
}

console.log(objectKeyForEachUniqueValArr([1,2,2,3])) //{1:1,2:2,3:1}
console.log(objectKeyForEachUniqueValArr([9,9,9,99])) //{9:3,99:1}
console.log(objectKeyForEachUniqueValArr([4,3,2,1])) //{1:1,2:1,3:1,4:1}