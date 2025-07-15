/** 
 * Write a function that takes an array of strings as args. 
 * Group the strings by their first letter.
 * Return an object with keys representing the first letters.
 * The values should be arrays of strings containing only corresponding strings.
*/

function arrayGroupStringsFirstLetter(arr) {
    let result = {};
    arr.forEach(str => {
        const firstLetter = str[0].toLowerCase();
        // if (!result[firstLetter]) { // if the key doesn't exist, create it
        //     result[firstLetter] = [];
        //     result[firstLetter].push(str);
        // } else {
        //     result[firstLetter].push(str);
        // }

        result[firstLetter] = result[firstLetter] || []; // if key is not found, create it with an empty array
        result[firstLetter].push(str); // push the string to the array

        // return arr.reduce((acc, curr) => {
        //     let firstChar = curr.toLowerCase().charAt(0);
        //   return { ...acc, [firstChar] : [...(acc[firstChar] || []), curr]};
        // }, {})
    });
    return result;
}

console.log(arrayGroupStringsFirstLetter(['Alf', 'Alice', 'Bob'])); // { A: ['Alf', 'Alice'], B: ['Bob'] }
console.log(arrayGroupStringsFirstLetter(['Berlin', 'Paris', 'Prague'])); // { B: ['Berlin'], P: ['Paris', 'Prague'] }
console.log(arrayGroupStringsFirstLetter(['Rome', 'Milan', 'Milano', 'Madrid'])); // { R: ['Rome'], M: ['Milan', 'Milano', 'Madrid'] }