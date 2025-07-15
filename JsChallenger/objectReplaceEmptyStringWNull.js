/**
 * Write a function that takes an object as argument. Some of the property values contain empty strings. 
 * Replace empty strings and strings that contain only whitespace with null values. 
 * Return the resulting object.
 */

function replaceEmptyStringWNull(obj) {
    // let newObj = {...obj};

    // for (let key in obj) {
    //     if (obj[key].trim() === '') {
    //         newObj[key] = null;
    //     }
    // }

    // return newObj;

    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, value.trim() === '' ? null : value]));
}

console.log(replaceEmptyStringWNull({ a: 'a', b: 'b', c: '' })) //{ a: 'a', b: 'b', c: null }
console.log(replaceEmptyStringWNull({ a: '', b: 'b', c: ' ', d: 'd' })) //{ a: null, b: 'b', c: null, d: 'd' }
console.log(replaceEmptyStringWNull({ a: 'a', b: 'b ', c: ' ', d: '' })) //{ a: 'a', b: 'b ', c: null, d: null }
