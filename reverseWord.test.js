const reverseWord = require("./reverseWord");

test("reverseWord correctly reverses a word", () => {
	expect(reverseWord("Hola")).toBe("aloH");
});

test("reverseWord correctly reverses a word", () => {
	expect(reverseWord("¡Hola mundo!")).toBe("!odnum aloH¡");
});

test("reverseWord returns an empty string if an empty string is passed to it", () => {
	expect(reverseWord("")).toBe("");
});
