// 4. Median of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length
    const merged = []
    let first =0;
    let second=0;
    for(let i=0; i < totalLength; i++){
        
        if((nums1[first] ?? Infinity)  < (nums2[second] ?? Infinity) ) {
          
            merged[i] = nums1[first]
            first++;
        } else {
            merged[i] = nums2[second];
            second++;
        }
    }
    const mid = Math.floor(totalLength / 2);
    return totalLength % 2 === 0
        ? (merged[mid - 1] + merged[mid]) / 2
        : merged[mid];  
};