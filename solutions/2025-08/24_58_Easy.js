// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/
var lengthOfLastWord = function(s) {
    const wordArray = s.split(" ")
    const length = wordArray.length

    for(let i=length-1;i>=0;i--){
        if(wordArray[i].length>0) {
            return wordArray[i].length
        }
    }
    return 0
};