/*Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]

Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.

*/

var intersect = function(nums1, nums2) {
    let map = {};
    let results = [];
    for (let i=0; i< nums1.length; i++){
        let curr = nums1[i];
        if (map.hasOwnProperty(curr)){
            map[curr]++;
        }else {
            map[curr] = 1;
        }
    }
    for (let j=0; j< nums2.length; j++){
        let curr = nums2[j];
        if (map.hasOwnProperty(curr) && map[curr] > 0 ){
            map[curr]--;
            results.push(curr);

        }
    }

    return results
};

let nums1 = [4,9,5];
let nums2 = [9,4,9,8,4];

console.log(intersect(nums1, nums2));
