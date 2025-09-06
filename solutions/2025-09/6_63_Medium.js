// 63. Unique Paths II
// https://leetcode.com/problems/unique-paths-ii/
// dp is simple but powerful
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length

    const dp = Array.from({length:m},()=>Array.from({length:n}).fill(0))
    dp[0][0] = 1
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(dp[i][j]) continue;

            dp[i][j] = (j-1 >= 0 && !obstacleGrid[i][j-1] ? dp[i][j-1]: 0) + (i-1 >= 0 && !obstacleGrid[i-1][j] ? dp[i-1][j]: 0)
        }
    }

    return obstacleGrid[m-1][n-1] ? 0:  dp[m-1][n-1]
};