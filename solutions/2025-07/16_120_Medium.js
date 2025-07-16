// 120. Triangle
// https://leetcode.com/problems/triangle/
var minimumTotal = function(triangle) {
    const n = triangle.length
    const minLength = []
    for(let i=0; i<n;i++){
        const temp = []
        if(i===0){
            temp.push(triangle[i][i])
            minLength.push(temp)
            continue;
        }

        const before = minLength[i-1]
        for(let j=0;j<=i;j++){
            temp[j] = triangle[i][j] + Math.min(before[j] ?? Infinity ,before[j-1] ?? Infinity)
        }
        minLength.push(temp)
    }

    return Math.min(...minLength[n-1])
};