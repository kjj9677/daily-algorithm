// 36. Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/
var isValidSudoku = function(board) {
    const checkRow= (i)=>{
        const nums = new Set()
        for(let j=0;j<9;j++){
            const target = board[i][j]
            if(target ==='.'){
                    continue;
            }
            if(nums.has(target)){
                return false
            }
            nums.add(target)
        }
        return true
    }
    const checkCol= (i)=>{
        const nums = new Set()
        for(let j=0;j<9;j++){
            const target = board[j][i]
            if(target ==='.'){
                    continue;
            }
            if(nums.has(target)){
                return false
            }
            nums.add(target)
        }
        return true
    }
    const checkSub= (i)=>{
        const nums = new Set()
        const rowMin = 3*Math.floor(i/3)
        const colMin = 3*(i%3)
        for(let j=rowMin;j<rowMin+3;j++){
            for(let k=colMin;k<colMin+3;k++){
                const target = board[j][k]
                if(target ==='.'){
                    continue;
                }
                if(nums.has(target)){
                    return false
                }
                
                nums.add(target)
            }
        }
        return true
    }

    for(let i=0;i<9;i++){
        const flag = !checkRow(i) || !checkCol(i) || !checkSub(i)
        if(flag) {
            return false 
        }
    }

    return true
};