/* Write a function that takes an object as argument. 
It should return an object with all original object properties, 
except for the property with key 'b' */

function removeObjProp(obj) {
    // delete obj.b;
    // return obj;

    // return Object.keys(obj).filter(key => key !== 'b').reduce((acc, curr) => {
    //     acc[curr] = obj[curr];
    //     return acc;
    // }, {});

    const { b, ...rest } = obj;
    return rest;
}

console.log(removeObjProp({ a: 1, b: 7, c: 3 })) //{ a: 1, c: 3 }
console.log(removeObjProp({ b: 0, a: 7, d: 8 })) //{ a: 7, d: 8 }
console.log(removeObjProp({ e: 6, f: 4, b: 5, a: 3 })) //{ e: 6, f: 4, a: 3 }