/* Write a function that takes a string as argument.
   As it is, the string has no meaning. Increment each letter to the next letter in the alphabet.
   Return the correct word.
*/

function stringFindCorrectWordByIncChars(str) {
    let arr = [...str];

    return arr.map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
}

console.log(stringFindCorrectWordByIncChars('bnchmf')); // coding
console.log(stringFindCorrectWordByIncChars('bgddrd')); // cheese
console.log(stringFindCorrectWordByIncChars('sdrshmf')); // testing
