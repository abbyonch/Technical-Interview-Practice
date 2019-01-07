/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

*/

var moveZeroes = function(nums) {
    // length of nums
    let numsLength = nums.length;
    // pointer to tell us where to update the number
    let j = 0;

    // after this loop you will have all the numbers that are not 0 moved to front
    for (let i=0; i < numsLength; i++){
        // if j is not equal to 0 move the number to the front
        if (nums[i] !==0){
            nums[j] = nums[i];
            j++;
        }
    }

    let index = j;
    // subtract so we know how many 0s to replace till the end
    numsLength = numsLength - index; // 4- 2;
    // from index that had the last number updated + 1, replace with 0s
    for (let i=0; i < numsLength; i++){
        nums[index+i] = 0;
    }
 };

let array1 = [0,2,0,1]
moveZeroes(array1);
console.log(array1);


