// 45. Jump Game II
// https://leetcode.com/problems/jump-game-ii/
var jump = function(nums) {
    const length = nums.length
    if(length ===1) return 0

    let count = 1;
    let prevMaxAchievable = 0;
    let maxAchievable = nums[0];
    while(true){
        if(maxAchievable >= length-1) break;

        const temp = maxAchievable
        for(let i= prevMaxAchievable+1; i<=temp;i++){
            maxAchievable = Math.max(maxAchievable, i + nums[i])
        }
        prevMaxAchievable = temp
        count++;
    }
    return count
};


var jump2 = function(nums) {
    const length = nums.length
    if(length ===1) return 0

    const queue = []
    queue.push(0)
    let count = 0;
    let maxAchievable = 0;
    while(queue.length >0){
        count++;
        const prevMaxAchievable = maxAchievable
        maxAchievable = 0;
        while(queue.length >0) {
            const targetIndex = queue.pop()
            maxAchievable = Math.max(targetIndex + nums[targetIndex],maxAchievable)
        } 
        if(maxAchievable>=length-1){
            break;
        }
        for(let i=prevMaxAchievable+1;i<=maxAchievable;i++){
            queue.push(i)
        }
    }
    return count
};