/**
 * Write a function that takes two strings (a and b) as arguments.
 * Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'.
 * Return the resulting string.
*/

function stringInsertCharAfterNCharEnd(a, b) {
    let result = [];
    let rest = a;

    while (rest.length > 0) {
        result.push(rest.slice(-3));
        rest = rest.slice(0, -3);
    }
    return result.reverse().join(b);
}

console.log(stringInsertCharAfterNCharEnd('1234567', 'a')); // 1a234a567
console.log(stringInsertCharAfterNCharEnd('1234567890', 'b')); // 1b234b567b890
console.log(stringInsertCharAfterNCharEnd('12345678901234567890', 'c')); // 12c345c678c901c234c567c890
