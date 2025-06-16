// 22. Generate Parentheses II
// https://leetcode.com/problems/generate-parentheses-ii/description/
var generateParenthesis = function(n) {
    const dp = Array.from({length : n},()=>new Set())
    dp[0].add("()")
    for(let i=1;i<n;i++){
        for(let j=0;j<i;j++){
            const maxMIndex = dp[j].size 
            const maxNIndex = dp[i-j-1].size 

            for(let m=0;m<maxMIndex;m++){
                for(let n=0;n<maxNIndex;n++){
                    const array1 = [...dp[j]]
                    const array2 = [...dp[i-j-1]]
                    dp[i].add(`${array1[m]}${array2[n]}`)
                }    
            }        
        }

        const array = [...dp[i-1]]
        for(let k = 0; k<array.length;k++){
            dp[i].add(`(${array[k]})`)
        }
    }
    return [...dp[n-1]]
};