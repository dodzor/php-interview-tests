/* Write a funct that takes an object as arg.
In some cases the object contains other objects with some deeply nested props.
Return the prop 'b' of object 'a' inside the original object if it exists.
If not, return undefined.
*/

function objectNestedProp(obj) {
    // return obj && obj.a && obj.a.b;
    return obj?.a?.b;
}

console.log(objectNestedProp({a:1})) //undefined
console.log(objectNestedProp({a:{b:{c:3}}})) //{c:3}
console.log(objectNestedProp({b:{a:1}})) //undefined
console.log(objectNestedProp({a:{b:2}})) //2
