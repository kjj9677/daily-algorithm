// 79. Word Search
// https://leetcode.com/problems/word-search/
// isVisited를 항상 copy했었는데, 롤백하는 아이디어로 time complexity를 줄일 수 있었다.
var exist = function(board, word) {
    const rowCount = board.length;
    const colCount = board[0].length;
    const visited = Array.from({ length: rowCount }, () => Array(colCount).fill(false));

    const dfs = (r, c, idx) => {
        if (idx === word.length) return true;
        if (
            r < 0 || c < 0 || r >= rowCount || c >= colCount ||
            visited[r][c] || board[r][c] !== word[idx]
        ) return false;

        visited[r][c] = true;

        const result = dfs(r + 1, c, idx + 1) ||
                       dfs(r - 1, c, idx + 1) ||
                       dfs(r, c + 1, idx + 1) ||
                       dfs(r, c - 1, idx + 1);

        visited[r][c] = false; // backtrack

        return result;
    }

    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            if (board[i][j] === word[0]) {
                if (dfs(i, j, 0)) return true;
            }
        }
    }

    return false;
}

// var exist = function(board, word) {
//     const rowCount = board.length
//     const colCount = board[0].length
//     const dRow = [0,0,1,-1]
//     const dCol = [1,-1,0,0]
//     let answer = false;
//     const dfs = (cur, isVisited, target)=> {
//         let flag= false
//         if(target.length ===0) {
//             flag= true;
//             return flag;
//         }
//         const [row, col] = cur
//         const copied = isVisited.map((row)=>([...row]))

//         copied[row][col] = true
//         for(let i=0;i<4;i++){
//             if(flag) break;
//             const nextRow = row + dRow[i]
//             const nextCol = col + dCol[i]

//             if(nextRow <0 || nextRow>=rowCount || nextCol <0 || nextCol>=colCount){
//                 continue;
//             } 
//             if(copied[nextRow][nextCol] || board[nextRow][nextCol] !== target[0]) {
//                 continue;
//             }
//             flag = dfs([nextRow,nextCol],copied,target.slice(1))
//         }

//         return flag
//     }

//     board.forEach((row,rowIndex)=> {
//         row.forEach((str,colIndex)=>{
//             if(!answer && str === word[0]){
//                 const isVisited = Array.from(({length:rowCount}),()=> Array.from({length:colCount}).fill(false))
//                 answer = dfs([rowIndex,colIndex],isVisited,word.slice(1))
//             }
//         })
//     })
//     return answer
// };