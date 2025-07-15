function nextHigherPrime(a) {
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

console.log(nextHigherPrime(38)); // 41
console.log(nextHigherPrime(7)); // 7
console.log(nextHigherPrime(115)); // 127
console.log(nextHigherPrime(2000)); // 2003

