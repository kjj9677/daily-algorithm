// 51. N-Queens
// https://leetcode.com/problems/n-queens/

var solveNQueens = function(n) {
    const results = [];
    
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    
    const cols = new Set();
    const diag1 = new Set();
    const diag2 = new Set();
    
    function backtrack(row) {
        if (row === n) {
            results.push(board.map(row => row.join('')));
            return;
        }
        
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row + col) || diag2.has(row - col)) {
                continue; 
            }
            
            board[row][col] = 'Q';
            cols.add(col);
            diag1.add(row + col);
            diag2.add(row - col);
            
            backtrack(row + 1);
            
            board[row][col] = '.';
            cols.delete(col);
            diag1.delete(row + col);
            diag2.delete(row - col);
        }
    }
    
    backtrack(0);
    return results;
};