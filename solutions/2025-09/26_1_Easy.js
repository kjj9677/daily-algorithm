// 1. Two Sum
// https://leetcode.com/problems/two-sum/
var twoSum = function(nums, target) {
    const numMap = new Map()
    for(let i=0;i<nums.length;i++){
        const newTarget = target - nums[i]
        if(numMap.has(newTarget)){
            return [numMap.get(newTarget), i]
        }
        numMap.set(nums[i], i)    
    }    
};