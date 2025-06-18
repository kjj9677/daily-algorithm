// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function(nums) {
    let answer = -1 * Infinity;
    let temp = 0;

    for(let i=0;i<nums.length;i++){
        if(temp < 0) temp=0;
        answer = Math.max(answer, temp+nums[i])
        temp += nums[i]
    }   
    return answer
};