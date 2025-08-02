/**
 * Write a function that takes two numbers (min and max) as arguments.
 * Return an array of numbers in the range min to max.
*/

function rangeOfNumbers(min, max) {
    // return Array.from({ length: max - min + 1 }, (_, i) => min + i);

    // if (min > max) return [];
    // return [min, ...rangeOfNumbers(min + 1, max)];

    // return [...Array(max - min + 1).keys()].map(i => i + min);

    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

console.log(rangeOfNumbers(2, 10)); // [2, 3, 4, 5, 6, 7, 8, 9, 10]
