// 198. House Robber
// https://leetcode.com/problems/house-robber/
var rob = function(nums) {
    const n = nums.length
    if(n<=2) {
        return Math.max(nums[0] ?? 0, nums[1] ?? 0)
    }
    const dp = Array.from({length: n}).fill(0);
    [dp[0],dp[1]] = [nums[0],Math.max(nums[0],nums[1])]
    let answer = Math.max(dp[0],dp[1])
    for(let i=2; i< n;i++){
        const target =  Math.max(dp[i-2] + nums[i], dp[i-1])
        dp[i] = target
        answer = Math.max(answer, target)
    }
    return answer 
};