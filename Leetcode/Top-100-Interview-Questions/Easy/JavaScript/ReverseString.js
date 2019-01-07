/*Write a function that takes a string as input and returns the string reversed.

Example 1:

Input: "hello"
Output: "olleh"
Example 2:

Input: "A man, a plan, a canal: Panama"
Output: "amanaP :lanac a ,nalp a ,nam A"

*/

var reverseString = function(s) {
    // initialize new empty string
    let newString = '';
    // starting backwards add each letter to the new string
    for (var i= s.length -1 ; i>=0; i--){
        newString += s[i]
    }
    return newString
};

let s = "hello"
console.log(reverseString(s));
