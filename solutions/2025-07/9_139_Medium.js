// 139. Word Break
// https://leetcode.com/problems/word-break/
const wordBreak = (s,wordDict)=>{
    const dp = {}
    const check= function(s, wordDict) {
        if(dp[s] !== undefined) return dp[s];
        if(s.length === 0) {
            return true
        };
        const candidates = wordDict.filter((word)=>s.startsWith(word))
    if(candidates.length === 0) {
        dp[s] = false;
        return false
    }

    return candidates.some((word)=> {
        const newTarget = s.slice(word.length);
        if(dp[newTarget] === false) return false;
        dp[newTarget] = check(newTarget, wordDict)  
        return dp[newTarget]
    })    
};
    return check(s,wordDict)
} 