/**
 * Write a func that takes two arrays(a ab b) as args.
 * Create an obj that has props with keys 'a' and corresponding values 'b'. 
 * Return the object.
*/

function arrayCreateObjectTrees(a, b) {
    // const result = {};
    // for (let i = 0; i < a.length; i++) {
    //     result[a[i]] = b[i];
    // }
    // return result; // O(n)

    /** 
     * Creates a new object for each iteration
     * Copies all existing props plus adds a new prop
     * Total copying: n(n-1)/2 = (n² - n)/2 = n²/2 - n/2 = O(n²)
     */
    // return a.reduce((acc, curr, i) => ({ ...acc, [curr]: b[i] }), {});

    /** 
     * Mutates the same accumulator object throughout
     * Each iteration only does one property assignment
     * No object copying overhead
     * Total operations: n property assignments = O(n)
     */
    return a.reduce((acc, curr, i) => {
        acc[curr] = b[i];
        return acc;
    }, {});
}

console.log(arrayCreateObjectTrees(['a','b','c'],[1,2,3]))  //{a:1,b:2,c:3}
console.log(arrayCreateObjectTrees(['w','x','y','z'],[10,9,5,2])) //{w:10,x:9,y:5,z:2}
console.log(arrayCreateObjectTrees([1,'b'],['a',2])) //{1:'a',b:2}
