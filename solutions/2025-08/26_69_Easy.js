// 69. Sqrt(x)
// https://leetcode.com/problems/sqrtx/
var mySqrt = function(x) {
    let start = 0;
    while(true){
        if(start * start === x) return start
        if(start * start >x) {
            break;
        }
        start++;
    }
    
    return start -1
};