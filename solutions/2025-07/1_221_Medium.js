// 221. Maximal Square
// https://leetcode.com/problems/maximal-square/
var maximalSquare = function(matrix) {
    let answer = 0;

    const m = matrix.length
    const n = matrix[0].length

    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    matrix.forEach((row,rowIndex)=> row.forEach((num,colIndex)=>{
        if(rowIndex -1 < 0 || colIndex -1 <0){
            dp[rowIndex][colIndex] = +num
        } else {
            if(+num>0){
                dp[rowIndex][colIndex] = Math.min(dp[rowIndex-1][colIndex-1],dp[rowIndex-1][colIndex],dp[rowIndex][colIndex-1]) + 1
            } else {
                dp[rowIndex][colIndex] = 0
            }
        }
        answer = Math.max(dp[rowIndex][colIndex], answer)
       
    }))
    
    return answer**2
};