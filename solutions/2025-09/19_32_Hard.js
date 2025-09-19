// 32. Longest Valid Parentheses
// https://leetcode.com/problems/longest-valid-parentheses/
var longestValidParentheses = function(s) {
    const n = s.length
    if(n ===0) return 0

    let answer = 0;
    let cur = 0;
    let start = 0;
    let end = 0;

    for(let i=0;i<n;i++){
        if(s[i] === "("){
            start +=1;
        } else {
            end +=1;
        }
        cur++;
        if(start > end){
            if(s[i]===")"){
                let t=i
                let s2=0;
                let e2=0;
                let min = t;
                for(let j=t;j>=0;j--){
                    if(s[j]==="("){
                        s2++;
                    } else {
                        e2++;
                    }
                    if(s2>e2){
                        min++;
                        break;
                    } 
                    min--;
                }
                answer = Math.max(t-min+1,answer)
            }
            continue;
        } else if(start === end){
            answer = Math.max(answer, cur)
        } else {
            cur = 0;
            start = 0;
            end = 0;
        }
    }

    return answer
    
};

