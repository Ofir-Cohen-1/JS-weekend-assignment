const { test, expect } = require("@jest/globals");
const searchInsert = require("./searchInsertPosition.easy");

test("Search a number that exists in the array", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test("Search a number that does not exist in the array", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});

test("Search a number that does not exist in the array and needed to be placed outside of array range", () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
});

test("Search a number that does not exist in the array and needed to be placed outside of array range", () => {
    expect(searchInsert([1, 2, 3], 4)).toBe(3);
});