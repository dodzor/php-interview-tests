/* It seems like something happened to these strings
Can you figure out how to clear up the chaos?

Write a function that joins these strings together such that they form the following words:
'Javascript', 'Countryside', 'Downside'

You migh want to apply basic JS string methods such as replace(), split, slice().
*/

function stringClearChaos(a, b) {
    const replace = str => str.replace('%', '');

    const firstStr = replace(a);
    const secondStr = replace(b);

    return firstStr.charAt(0).toUpperCase() + firstStr.slice(1) + secondStr.split('').reverse().join('');
}

console.log(stringClearChaos('java', 'tpi%rcs')); // Javascript
console.log(stringClearChaos('c%ountry', 'edis')); // Countryside
console.log(stringClearChaos('down', 'nw%on')); // Downside

