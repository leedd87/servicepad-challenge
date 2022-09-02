// 1. In mathematics, the Fibonacci sequence or serie is the following infinite
// sequence of natural numbers:
// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597 ...
// where f (0) = 0, f (1) = 1 and f (n) = f (n-1) + f (n-2).
// Code a program (in javascript or typescript) that solves for any
// number in the fibonacci series.

// Plus: Implement a test to the task performed (Preferably with Jest).

//Cada termino es la suma de los dos anteriores
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

// 2. Given a given input text, Code a program (in javascript or typescript) that
// displays the number of repetitions of each word.
// Sample text: "Hi how are things? How are you?Are you a developer? I
// am also a developer"

// Plus: Implement a test to the task performed (Preferably with Jest).

/*Sample text:

*/

let text =
	"Hi how are things ? How are you ? Are you a developer ? I am also a developer";

function wordCounter(str) {
	let word;
	let result = {};
	let strArray = str.split(" ");

	for (word of strArray) {
		if (result[word]) {
			result[word]++;
		} else {
			result[word] = 1;
		}
	}

	return result;
}

console.log(wordCounter(text));

// 3. Code a program (in javascript or typescript) that displays the numbers from
// 1 to 100 on the screen, substituting the multiples of 3 for the word "fizz", the
// multiples of 5 for "buzz" and the multiples of both, that is, the multiples of 3
// and 5, by the word "fizz buzz".

function fizzBuzz() {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log("fizz buzz");
		} else if (i % 3 === 0) {
			console.log("fizz");
		} else if (i % 5 === 0) {
			console.log("buzz");
		} else {
			console.log(i);
		}
	}
}

fizzBuzz();
// Plus: Implement a test to the task performed (Preferably with Jest).
