// LeetCode 15: 3Sum
// https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
    nums.sort((a,b)=> a-b)
    const answerSet = new Set()
    const twoSumMap = new Map()

    twoSumMap.set(nums[0]+ nums[1], new Set())
    twoSumMap.get(nums[0]+ nums[1]).add(`${nums[0]},${nums[1]}`)

    for(let i=2;i<nums.length;i++){ 
        if(twoSumMap.get(-1*nums[i])){
            const target = twoSumMap.get(-1*nums[i])
            
            const targetArray = [...target]
            targetArray.forEach((combo)=>{
                answerSet.add(combo + "," + nums[i])
            })
        }

        for(let j=0;j<i;j++){
            const twoSum = nums[i]+ nums[j]
            if(twoSumMap.has(twoSum)){
                twoSumMap.get(twoSum).add(`${nums[j]},${nums[i]}`)
            } else{
                twoSumMap.set(twoSum, new Set())
                twoSumMap.get(twoSum).add(`${nums[j]},${nums[i]}`)
            }
        }
    }

    const answer = [...answerSet].map((set)=> set.split(",").map((num)=>+num))
    return answer
};