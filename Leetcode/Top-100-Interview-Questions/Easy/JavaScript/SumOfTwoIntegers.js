/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1

PS: STILL DONT UNDERSTAND XOR OR BITSTUFF, REVIEW THIS AGAIN

*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let c;
    while((c = a & b) != 0){
        a = a ^ b;
        b = c << 1;
    }
    return a ^ b;

};

console.log(getSum(40, 30)); // 70
