// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/
var climbStairs = function(n) {
    if(n===1) return 1
    const answerArray = Array.from({length: n}).fill(0)
    answerArray[0] = 1
    answerArray[1] = 2
    for(let i=2;i<n;i++){
        answerArray[i] = answerArray[i-1] + answerArray[i-2]
    }
    
    return answerArray[n-1]
};
