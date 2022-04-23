const { test, expect } = require("@jest/globals");
const palindromeNumber = require("./palindromeNumber.easy");

test("Example 1", () => {
  expect(palindromeNumber(121)).toBe(true);
});

test("Example 2", () => {
  expect(palindromeNumber(-121)).toBe(false);
});

test("Example 3", () => {
  expect(palindromeNumber(10)).toBe(false);
});
test("Example 4", () => {
  expect(palindromeNumber(11)).toBe(true);
});
