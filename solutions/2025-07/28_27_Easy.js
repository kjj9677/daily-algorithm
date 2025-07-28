// 27. Remove Element
// https://leetcode.com/problems/remove-element/
var removeElement = function(nums, val) {
    const length = nums.length
    let targetIdx = length -1;;
    let answer = 0;
    let i=0;
    while(i<=targetIdx){
        if(nums[i] !== val) {
            answer++;
            i++;
            continue;
        } else {
           [nums[i], nums[targetIdx]] = [nums[targetIdx],"_"]
           targetIdx--;
        }
    }    

    return answer
};