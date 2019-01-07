/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0){
        return 0;
    }
    // if the rest of the values in haystack have a length smaller than need then needle does exist
    let lenNeedle = needle.length;
    let limit = haystack.length - needle.length;
    for(let i = 0; i <= limit; i++) {
        if(haystack.substring(i, lenNeedle+i) === needle) {
            return i;
        }
    }
    return -1;

};

let haystack = "aaaa";
let needle = "bba";

console.log(strStr(haystack, needle));
