/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

const longestCommonPrefix = function (strs) {
  let comparableStr = strs[0];
  for (const str of strs) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== comparableStr[i]) {
        comparableStr = comparableStr.slice(0, i);
      }
      if (i === comparableStr.length - 1) break;
    }
    comparableStr = comparableStr.slice(0, str.length);
  }
  return comparableStr;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["flower", "flow", ""]));

module.exports = longestCommonPrefix;
