// 31. Next Permutation
// https://leetcode.com/problems/next-permutation/
var nextPermutation = function(nums) {
    const n = nums.length
    let standard = 0;
    for(let i=n-1 ; i> 0 ;i--){
        if(nums[i] > nums[i-1]){
            standard = i;
            let target 
            for(let j=n-1; j>0; j--){
                if(nums[j] > nums[i-1]){
                    target = j
                    break;
                }
            }
            [nums[target],nums[i-1]] = [nums[i-1],nums[target]]
            break;
        }
    }
    
    for(let i=0; i< n;i++) {
        if(i + standard >= n -1 - i) break;
        [nums[i + standard],nums[n -1 - i]] = [nums[n -1 - i],nums[i + standard]]
    }

    return nums
};
