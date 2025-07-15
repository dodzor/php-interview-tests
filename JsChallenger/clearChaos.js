function clearChaos(a, b) {
    const replace = str => str.replace('%', '');

    const firstStr = replace(a);
    const secondStr = replace(b);

    return firstStr.charAt(0).toUpperCase() + firstStr.slice(1) + secondStr.split('').reverse().join('');
}

console.log(clearChaos('java', 'tpi%rcs')); // Javascript
console.log(clearChaos('c%ountry', 'edis')); // Countryside
console.log(clearChaos('down', 'nw%on')); // Downside

