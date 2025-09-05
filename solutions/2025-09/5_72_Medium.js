// 72. Edit Distance
// https://leetcode.com/problems/edit-distance/
// 처음엔 재귀적으로 풀어서 시간초과가 났지만, DP로 바꾸니 통과했다. 발상을 조금만 전환해보자
function minDistance(word1, word2) {
  const n = word1.length, m = word2.length;
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  for (let i = 0; i <= n; i++) dp[i][0] = i;  
  for (let j = 0; j <= m; j++) dp[0][j] = j;   

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(
          dp[i - 1][j - 1], 
          dp[i - 1][j],     
          dp[i][j - 1]      
        );
      }
    }
  }
  return dp[n][m];
}