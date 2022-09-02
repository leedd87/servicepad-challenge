const fibonacci = require("./fibonacci");

test("fibonacci(6)", () => {
	expect(fibonacci(6)).toBe(8);
	expect(fibonacci(7)).toBe(13);
});
