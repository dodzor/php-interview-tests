/**
 * Write a function that takes an object as argument. 
 * Somehow, the properties and keys of the object got mixed up. 
 * Swap the Javascript object's key with its values and return the resulting object
 */

function swapObjectKeysValue(obj) {
    // let keys = Object.keys(obj);
    // let values = Object.values(obj);
    
    // let result = {};
    // for (let i=0; i<keys.length; i++) {
    //     result[values[i]] = keys[i];
    // }
    // return result;

    // return Object.entries(obj); // [ [ 'z', 'a' ], [ 'y', 'b' ], [ 'x', 'c' ], [ 'w', 'd' ] ]
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));

    // return Object.entries(a).reduce((acc, [key, value]) => {
    // 	return {...acc, [value]:[key]};
    // }, {});
}

console.log(swapObjectKeysValue({z:'a',y:'b',x:'c',w:'d'})) //{a:'z',b:'y',c:'x',d:'w'}
console.log(swapObjectKeysValue({2:'a',4:'b',6:'c',8:'d'})) //{a:'2',b:'4',c:'6',d:'8'}
console.log(swapObjectKeysValue({a:1,z:24})) //{1:'a',24:'z'})