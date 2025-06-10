// 29. Divide Two Integers
// https://leetcode.com/problems/divide-two-integers/
var divide = function(dividend, divisor) {
   const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX; 
    }

    let sign = (dividend > 0) === (divisor > 0) ? 1 : -1;

    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let result = 0;

    while (a >= b) {
        let temp = b;
        let multiple = 1;
        while (temp <= (a >> 1)) {
            temp <<= 1;
            multiple <<= 1;
        }
        a -= temp;
        result += multiple;
    }

    return sign * result;
};