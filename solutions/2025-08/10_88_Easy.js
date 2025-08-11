// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/
var merge = function(nums1, m, nums2, n) {
    const merged = []

    let index1 = 0
    let index2 = 0;

    for(let i=0;i<m+n;i++){
        if(index1 >=m){
            merged.push(nums2[index2])
            index2++
            continue;
        }
        if(index2 >=n){
            merged.push(nums1[index1])
            index1++
            continue;
        }
        if(nums1[index1]> nums2[index2]){
            merged.push(nums2[index2])
            index2++
        }else {
            merged.push(nums1[index1])
            index1++
        }
    }
    for(let i=0;i<m+n;i++){
        nums1[i] = merged[i]
    }
};