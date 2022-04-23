/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */

// const isOpenBracket = (bracketChar) =>
//   bracketChar === "(" || bracketChar === "{" || bracketChar === "[";

// const isClosingBracket = (bracketChar) =>
//   bracketChar === ")" || bracketChar === "}" || bracketChar === "]";

// const isSameType = (openingBracket, closingBracket) =>
//   (openingBracket === "(" && closingBracket === ")") ||
//   (openingBracket === "[" && closingBracket === "]") ||
//   (openingBracket === "{" && closingBracket === "}");

// const isValid = function (s) {
//   const stack = [];
//   for (let i = 0; i < s.length; i++) {
//     if (isOpenBracket(s[i])) {
//       stack.push(s[i]);
//     } else if (isClosingBracket(s[i])) {
//       const openingBracket = stack.pop();
//       if (!isSameType(openingBracket, s[i])) return false;
//     }
//   }
//   return stack.length === 0;
// };

const isValid = function (s) {
  const closing = [")", "]", "}"],
    openning = ["(", "[", "{"],
    stack = [];
  for (let i = 0; i < s.length; i++) {
    if (openning.indexOf(s[i]) > -1) {
      stack.push(s[i]);
    } else {
      if (stack.length) {
        let temp = stack.pop();
        if (openning.indexOf(temp) !== closing.indexOf(s[i])) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("}]"));
console.log(isValid("((((("));
console.log(isValid("[()]{}"));

module.exports = isValid;
