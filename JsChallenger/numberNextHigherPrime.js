/* This challenge is a little bit more complex.
   Write a function that takes a number (a) as argument.
   If a is prime, return a.
   If not, return the next higher prime number.
*/

function numberNextHigherPrime(a) {
	const isPrime = (a) => {
        // if a number has a divisor larger than √a, it must also have a divisor smaller than √a
	    for (let i=2; i <= Math.sqrt(a); i++) {
	      if (a % i === 0) {
	        return false;
	      }
	    }
	    return a > 1;
	  } 
	  
	  while (!isPrime(a)) a++;
	  return a;
}

console.log(numberNextHigherPrime(38)); // 41
console.log(numberNextHigherPrime(7)); // 7
console.log(numberNextHigherPrime(115)); // 127
console.log(numberNextHigherPrime(2000)); // 2003

