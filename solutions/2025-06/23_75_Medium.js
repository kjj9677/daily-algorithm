// LeetCode 75. Sort Colors
// https://leetcode.com/problems/sort-colors/
var sortColors = function(nums) {

    let firstBlueIndex = nums.length -1 
    let lastRedIndex = 0;

    for(let i=0; i<nums.length;i++){
        while(true){
            if(nums[i] === 2 && i < firstBlueIndex) {
                [nums[firstBlueIndex],nums[i]] = [nums[i],nums[firstBlueIndex]]
                firstBlueIndex--
                continue;   
            } else if(nums[i]===0 && i > lastRedIndex ){
                [nums[lastRedIndex],nums[i]] =  [nums[i],nums[lastRedIndex]]
                lastRedIndex++;
                continue;
            } else {
                if(nums[i] ===0) {
                    lastRedIndex++;
                }
                if(nums[i] === 2){
                    firstBlueIndex--;
                }
                break;
            }

        }
    }

};
