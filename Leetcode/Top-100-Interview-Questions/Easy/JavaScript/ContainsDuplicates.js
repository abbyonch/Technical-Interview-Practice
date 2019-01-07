/*Given an array of integers, find if the array contains any duplicates.

    Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

    Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    map = {}
    for (var i=0; i < nums.length; i++){
        if (map.hasOwnProperty(nums[i])){
            map[nums[i]] = true;
            return true;
        }else {
            map[nums[i]] = false;
        }
    }
    return false;
};

let nums = [1,2,3,1];
console.log(containsDuplicate(nums));
