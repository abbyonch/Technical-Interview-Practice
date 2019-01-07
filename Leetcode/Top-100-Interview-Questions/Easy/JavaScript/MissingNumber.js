/*

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    let n = nums.length;
    // find the sum of the numbers if they nothing was missing
    let seriesSum =  (n +1) * (n/2);
    // find the sum of the values in the given array
    let arraySum = nums.reduce((acc, val) => acc += val);
    // subtract series from given array sum to find missing number
    return seriesSum - arraySum;
};

let nums = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(nums));
