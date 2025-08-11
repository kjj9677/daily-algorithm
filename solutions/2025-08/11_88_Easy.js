// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/
// in-place solution(no extra space)
var merge = function(nums1, m, nums2, n) {
    let targetIndex = m+n -1 
    let index1 = m-1;
    let index2 = n-1;
    while(targetIndex>=0) {
        if(index1 <0) {
            nums1[targetIndex] = nums2[index2]
            index2--;
        } else if(index2<0){
            nums1[targetIndex] = nums1[index1]
            index1--;
        } else if(nums1[index1] <nums2[index2]) {
            nums1[targetIndex] = nums2[index2]
            index2--;
        } else {
            nums1[targetIndex] = nums1[index1]
            index1--;
        }
        targetIndex--; 
    }
};