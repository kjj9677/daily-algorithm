// 62. Unique Paths
// https://leetcode.com/problems/unique-paths/

const factorial = (k)=>{
    if(k===0) return 1

    let value = 1;
    for(let i=1;i<=k;i++){
        value = value * i
    }
    return value
}

var uniquePaths = function(m, n) {
    let temp = 1;
    if(m>n){
        for(let i=m+n-2;i>m-1;i--){
            temp *= i
        }
        return temp/factorial(n-1)
    } else {
        for(let i=m+n-2;i>n-1;i--){
            temp *= i
        }
        return temp/factorial(m-1)
    }
};