// 69. Sqrt(x)
// https://leetcode.com/problems/sqrtx/
// 이분 탐색을 이용해 time complexity O(log n)로 구현
var mySqrt = function(x) {
    if (x === 0) return 0;
    
    let left = 1, right = x;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (mid === Math.floor(x / mid)) {
            return mid;
        } else if (mid < Math.floor(x / mid)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return right;
};