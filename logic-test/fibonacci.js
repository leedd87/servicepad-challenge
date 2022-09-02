// 1. In mathematics, the Fibonacci sequence or serie is the following infinite
// sequence of natural numbers:
// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597 ...
// where f (0) = 0, f (1) = 1 and f (n) = f (n-1) + f (n-2).
// Code a program (in javascript or typescript) that solves for any
// number in the fibonacci series.

// Plus: Implement a test to the task performed (Preferably with Jest).

//Cada resultado es la suma de los dos anteriores
/*fibonacci sequence
0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597 ...

f(0) = 0
f(1) = 1
f(n) = f(n-1) + f(n-2)
*/

const fibonacci = (n) => {
	if (n < 2) return n;
	return fibonacci(n - 2) + fibonacci(n - 1);
};

console.log(fibonacci(6)); //8
console.log(fibonacci(7)); //13

module.exports = fibonacci;
