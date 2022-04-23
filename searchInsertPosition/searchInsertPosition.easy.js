/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * @description Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

Optional write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
 */

const searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let m = Math.floor(l + (r - l) / 2);
  while (l <= r) {
    if (target < nums[m]) {
      r = m - 1;
    } else if (target > nums[m]) {
      l = m + 1;
    } else {
      return m;
    }
    m = Math.floor(l + (r - l) / 2);
  }
  return l;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));

module.exports = searchInsert;