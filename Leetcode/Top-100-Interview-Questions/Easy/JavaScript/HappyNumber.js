/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example:

Input: 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

 */


function happyNumber(n) {
    let seen = [];
    return squareSum(n, seen);
}

function squareSum(n, seen) {
    // if the number being passed in is 1, its happy !
    if (n === 1) {
        return true;
    }
    // if we have already processed the number it will never reach 1
    if (seen[n]) {
        return false;
    }
    // if you have already processed the number mark is as seen;
    seen [n] = true;
    // keeps track of the number of n added up
    let sum = 0;
    // find the squares of the digits and sum them up
    n = n.toString();
    for (let i = 0; i < n.length; i++) {
        sum += Math.pow(n[i], 2);
    }
    // recursively do this until you get to 1
    return squareSum(sum, seen);

}

console.log(happyNumber(19));
