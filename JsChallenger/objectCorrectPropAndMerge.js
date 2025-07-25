/** Write a function that takes two objects as arguments. 
 * Unfortunately, the property 'b' in the second object has the wrong key. 
 * It should be named 'd' instead. Merge both objects and correct the wrong property name. 
 * Return the resulting object. It should have the properties 'a', 'b', 'c', 'd', and 'e'. */

function objectCorrectPropAndMerge(obj1, obj2) {
    // if ('b' in obj2) {
    //     obj2.d = obj2.b;
    //     delete obj2.b;
    // }
    // return { ...obj1, ...obj2 };

    const { b, ...rest } = obj2;
    return { ...obj1, ...rest, d: b };
}

console.log(objectCorrectPropAndMerge({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })) //{ a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(objectCorrectPropAndMerge({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })) //{ a: 5, b: 4, c: 3, e: 2, d: 1}
