// 213. House Robber II
// https://leetcode.com/problems/house-robber-ii/
var rob = function(nums) {
    const n = nums.length
    if(n<=2) {
        return Math.max(nums[0] ?? 0, nums[1] ?? 0)
    }
    const dp = Array.from({length: n}).fill(0);
    const dp2 = Array.from({length: n}).fill(0);
    [dp[0],dp[1]] = [nums[0],Math.max(nums[0],nums[1])]
    dp2[1] = nums[1]
    let answer = Math.max(dp[0],dp[1])
    for(let i=2; i< n-1;i++){
        const target =  Math.max(dp[i-2] + nums[i], dp[i-1])
        const target2 =  Math.max(dp2[i-2] + nums[i], dp2[i-1])
        dp[i] = target
        dp2[i] = target2
        answer = Math.max(answer, target)
    }
    answer = Math.max(dp[n-2], nums[n-1] + dp2[n-3])

    return answer
};