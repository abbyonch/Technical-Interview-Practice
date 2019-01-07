
/*Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

    s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

PS: LOOK UP A BETTER WAY TO DO THIS ...WITHOUT USING 30 LINES OF CODE..YIKES

*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    if (s.length === 0){
        return -1;
    }
    let hashTable = {};
    for (var i=0; i<= s.length -1 ; i++){
        if(hashTable.hasOwnProperty(s[i])){
            hashTable[s[i]] = [i, true];
        } else {
            hashTable[s[i]] = [i, false];
        }
    }
    let tempArray = [];
    for (var letter in hashTable){
        if (hashTable.hasOwnProperty(letter)){
            if (hashTable[letter][1] === false){
                tempArray.push({key: letter, value: hashTable[letter][0]});
            }
        }
    }
    tempArray.sort(function (a, b) {
        return a.value - b.value;
    })
    if (tempArray.length === 0){
        return -1;
    }else {
        return tempArray[0].value;
    }
};
