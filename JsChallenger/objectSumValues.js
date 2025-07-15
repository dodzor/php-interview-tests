/**
 * Write a function that takes an object as arg.
 * Return the sum of all its properties' values.
*/

function sumObjValues(obj) {
    // let sum = 0;
    // for (let key in obj) {
    //     sum += obj[key];
    // }
    // return sum;

    return Object.values(obj).reduce((acc, curr) => acc + curr, 0);
}

console.log(sumObjValues({a:1,b:2,c:3})) //6
console.log(sumObjValues({j:9,i:2,x:3,z:4})) //18
console.log(sumObjValues({w:15,x:22,y:13})) //50
