// 3. Code a program (in javascript or typescript) that displays the numbers from
// 1 to 100 on the screen, substituting the multiples of 3 for the word "fizz", the
// multiples of 5 for "buzz" and the multiples of both, that is, the multiples of 3
// and 5, by the word "fizz buzz".

function fizzBuzzHundred() {
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

fizzBuzzHundred();

function fizzBuzz(n) {
	if (n % 3 === 0 && n % 5 === 0) {
		return "fizz buzz";
	} else if (n % 3 === 0) {
		return "fizz";
	} else if (n % 5 === 0) {
		return "buzz";
	} else {
		return n;
	}
}

module.exports = fizzBuzz;
// Plus: Implement a test to the task performed (Preferably with Jest).
