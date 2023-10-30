// https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
 

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


// MY SOLUTION
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let storage = {};

    for(let [index, num] of nums.entries()) {
        if(storage[num] !== undefined) return [storage[num], index]
        storage[target-num] = index
    }
};


// NOTES
// for time complexity: only want to go through the array once
// to have O(n) complexity
// 
// create a hashmap
// initialize storage object
// iterate through the array
// as I iterate through each element in nums, extracting index and number out to see what is being stored in storage
// if the num in storage exists return the solution
// 
// nums = [2, 7, 11, 15], target = 9
// storage = {
//     '7': 0,
// }
