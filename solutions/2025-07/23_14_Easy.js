// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/
var longestCommonPrefix = function(strs) {
    const commonPrefix = []
    const minLength = Math.min(...(strs.map((str)=>str.length)))
    for(let i=0;i<minLength;i++){
        const target = strs[0][i]
        if(strs.every((str)=>str[i] ===target)){
            commonPrefix.push(target)
            continue;
        }
        break;
    }

    return commonPrefix.join("")
};