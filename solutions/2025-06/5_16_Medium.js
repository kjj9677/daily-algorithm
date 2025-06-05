// LeetCode 16: 3Sum Closest
// https://leetcode.com/problems/3sum-closest/
// 15번 문제풀이에 영감을 받음

var threeSumClosest = function(nums, target) {
    if(nums.length === 3) return nums.reduce((acc,num)=>acc+num,0)

    let answer = nums[0] + nums[1] + nums[2]
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum === target) {
                return target
            } 
            answer = Math.abs(target - sum) < Math.abs(target - answer) ? sum :answer
            
            if (sum < target) {
                left++
            } else {
                right--
            }
        }
    }
    
    return answer
};