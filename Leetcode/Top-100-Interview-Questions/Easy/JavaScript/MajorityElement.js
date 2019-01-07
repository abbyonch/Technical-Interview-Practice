/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // create a hash map with value as amount of time it appears
    tempMap = {}
    for (var i = 0; i < nums.length; i++){
        if (tempMap.hasOwnProperty(nums[i])){
            tempMap[nums[i]] += 1;
        } else {
            tempMap[nums[i]] = 1;
        }
    }
    // loop through map if the value is greater than half the number of elements return the num
    for (var key in tempMap){
        if (tempMap.hasOwnProperty(key)){
            if (tempMap[key] > nums.length/2){
                return key;
            }

        }
    }

};
