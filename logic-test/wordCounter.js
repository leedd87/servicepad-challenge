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
