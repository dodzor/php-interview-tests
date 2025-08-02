/* Write a function that takes 2 numbers, x and y, as arguments.
   Check if x is divisible by y. If yes, return x.
   If not, return the smallest number larger than x that is divisible by y. */

function numberNextHigherDivisibleBy(x, y) {
    while (x % y !== 0) x++;
    return x;
}

// console.log(numberNextHigherDivisibleBy(1, 23)); // 23
// console.log(numberNextHigherDivisibleBy(23, 1)); // 23
// console.log(numberNextHigherDivisibleBy(7, 3)); // 9
// console.log(numberNextHigherDivisibleBy(-5, 7)); // 0


function nextHigherNumberDivisibleByB(a, b) {
    return Math.ceil(a / b) * b;
}

console.log(nextHigherNumberDivisibleByB(1, 23)); // 23
console.log(nextHigherNumberDivisibleByB(23, 1)); // 23
console.log(nextHigherNumberDivisibleByB(7, 3)); // 9
console.log(nextHigherNumberDivisibleByB(-5, 7)); // 0
