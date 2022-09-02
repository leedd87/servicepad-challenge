const fibonacci = require("./fibonacci");

test("fibonacci(6)", () => {
	expect(fibonacci(6)).toBe(8);
});

test("fibonacci(7)", () => {
	expect(fibonacci(7)).toBe(13);
});

test("fibonacci(8)", () => {
	expect(fibonacci(8)).toBe(21);
});
