const strStr = require("./strStr.easy");

test("Example 1", () => {
  expect(strStr("hello", "ll")).toBe(2);
});
test("Example 2", () => {
  expect(strStr("aaaaa", "bba")).toBe(-1);
});
test("Example 3", () => {
  expect(strStr("aaaaa", "")).toBe(0);
});
test("Example 4", () => {
  expect(strStr("lali", "li")).toBe(2);
});