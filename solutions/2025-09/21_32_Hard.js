// 32. Longest Valid Parentheses
// https://leetcode.com/problems/longest-valid-parentheses/
// DP 와 스택을 이용한 두가지 풀이 추가
// DP 풀이 선택시 반드시 정답과 직결되는 점화식은 아니여도 됨. 풀이 과정에서 필요한 점화식을 통해 정답을 도출할 수도 있음.

function longestValidParentheses(s) {
  const st = [-1]; 
  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      st.push(i);
    } else {
      st.pop();
      if (st.length === 0) {
        st.push(i); 
      } else {
        ans = Math.max(ans, i - st[st.length - 1]);
      }
    }
  }
  return ans;
}


function longestValidParentheses(s) {
  const n = s.length;
  const dp = Array(n).fill(0);
  let ans = 0;

  for (let i = 1; i < n; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else {
        const j = i - dp[i - 1] - 1;
        if (j >= 0 && s[j] === '(') {
          dp[i] = dp[i - 1] + 2 + (j >= 1 ? dp[j - 1] : 0);
        }
      }
      ans = Math.max(ans, dp[i]);
    }
  }
  return ans;
}