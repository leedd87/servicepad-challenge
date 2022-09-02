const fizzBuzz = require("./fizzBuzz");

test("returns 1 for 1", () => {
	expect(fizzBuzz(1)).toBe(1);
});

test("return fizz for 3", () => {
	expect(fizzBuzz(3)).toEqual("fizz");
});
