/**
 * Write a function that takes an array of objects and a string as arguments. 
 * Add a property with key 'continent' and value equal to the string to each of the objects. 
 * Return the new array of objects. Hint: try not to mutate the original array
 */

function arrayAddPropToObject(arr, str) {
    return arr.map(obj => {
        obj.continent = str;
        return obj;
    });

    // return arr.map(obj => ({...obj, continent: str}));
}

//[{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
console.log(arrayAddPropToObject([
    { city: 'Tokyo', country: 'Japan' }, 
    { city: 'Bangkok', country: 'Thailand' }], 'Asia')) 

//[{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]
console.log(arrayAddPropToObject([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')) 
