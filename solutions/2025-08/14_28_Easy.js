// 28. Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
var strStr = function(haystack, needle) {
    const m = haystack.length
    const n = needle.length;
    if(m<n){
        return -1
    }
    for(let i=0; i<m ; i++){
        let flag = true
        for(let j=0;j<n;j++){
            if(haystack[i+j] !== needle[j]){
                flag= false;
                break;
            }
        }
        if(flag) {
            return i
        }
    }
    return -1
};