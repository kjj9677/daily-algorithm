// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/
var longestPalindrome = function(s) {
    let answer = s[0]
    for(let i=0;i<s.length;i++){
        let target = s[i]
        for(let j=0;j<s.length;j++){
            if(i-j <0 || i+j>s.length -1) {
                console.log(i,j,answer,target)
                target = s.slice(i-j+1, i+j)
                break;
            }
            if(s[i-j] === s[i+j]) {
                continue;
            }
            target = s.slice(i-j+1, i+j);
            break;
        }
        if(target.length > answer.length) answer = target
    }
    
    for(let i=0;i<s.length -1 ;i++){
        if(s[i] !== s[i+1]) continue;
        let target = s.slice(i,i+2)
        for(let j=0;j<s.length;j++){
            if(i-j <0 || i +1 +j>s.length -1) {
                target = s.slice(i-j+1, i+j+1)
                break;
            }
            if(s[i-j] === s[i+1+j]) {
                continue;
            }
            target = s.slice(i-j+1, i+j+1);
            break;
        }
        if(target.length > answer.length) answer = target
    }

    return answer
};