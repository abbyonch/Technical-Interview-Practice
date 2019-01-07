/*Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

PS: THIS SOLUTION USES EXTRA MEMORY, WE SHOULD FIX IT AT SOME POINT

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // loop through array is you and create map of number and true or false if repeated
    let tempMap = {};
    for (var i=0; i <= nums.length; i++){
        if(tempMap.hasOwnProperty(nums[i])){
            tempMap[nums[i]] = true;
        } else {
            tempMap[nums[i]] = false;
        }
    }
    // loop through map, if key has a value of false the number only appeared once
    for (var k in tempMap){
        if (tempMap.hasOwnProperty(k)){
            if (tempMap[k] === false) {
                return k;
            }
        }
    }
};

let input = [2,2,1];
console.log(singleNumber(input));
