// 54. Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/
var spiralOrder = function(matrix) {
    const answer = []
    const m = matrix.length
    const n = matrix[0].length
    let leftWall = 0;
    let topWall = 0;
    let rightWall = n-1
    let bottomWall = m-1
    
    let direction = 'right'
    let cur = [0,0]

    while(true){
        const [row,col] = cur
        if(row <topWall || row > bottomWall || col < leftWall || col > rightWall){
            break;
        }
        answer.push(matrix[row][col])

        switch(direction){
            case 'right':{
                if(col < rightWall) {
                    cur = [row, col+1]
                } else {
                    topWall++;
                    direction = 'bottom'
                    cur = [row+1,col]
                }
                break;
            }
             case 'bottom':{
                if(row < bottomWall) {
                    cur = [row+1, col]
                } else {
                    rightWall--;
                    direction = 'left'
                    cur = [row,col-1]
                }
                break;
            }
             case 'left':{
                if(col > leftWall) {
                    cur = [row, col-1]
                } else {
                    bottomWall--;
                    direction = 'top'
                    cur = [row-1,col]
                }
                break;
            }
             case 'top':{
                if(row > topWall) {
                    cur = [row-1, col]
                } else {
                    leftWall++;
                    direction = 'right'
                    cur = [row,col+1]
                }
                break;
            }
        }
    } 
    return answer 
};



