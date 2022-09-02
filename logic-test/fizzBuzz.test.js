const fizzBuzz = require("./fizzBuzz");

test("returns 1 for 1", () => {
	expect(fizzBuzz(1)).toBe(1);
});

test("return fizz for 3", () => {
	expect(fizzBuzz(3)).toBe("fizz");
});

test("return buzz for 5", () => {
	expect(fizzBuzz(5)).toBe("buzz");
});

test("return fizz buzz for 15", () => {
	expect(fizzBuzz(15)).toBe("fizz buzz");
});
