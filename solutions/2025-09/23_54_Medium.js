// 54. Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/
var spiralOrder = function(matrix) {
  const m = matrix.length;
  if (m === 0) return [];
  const n = matrix[0].length;

  const res = [];
  let top = 0, bottom = m - 1;
  let left = 0, right = n - 1;

  while (top <= bottom && left <= right) {

    for (let c = left; c <= right; c++) res.push(matrix[top][c]);
    top++;

    
    for (let r = top; r <= bottom; r++) res.push(matrix[r][right]);
    right--;

    
    if (top <= bottom) {
      for (let c = right; c >= left; c--) res.push(matrix[bottom][c]);
      bottom--;
    }

    
    if (left <= right) {
      for (let r = bottom; r >= top; r--) res.push(matrix[r][left]);
      left++;
    }
  }

  return res;
}