// 118. Pascal's Triangle
// https://leetcode.com/problems/pascals-triangle/
var generate = function(numRows) {
    const answerArray = []

    for(let i=0; i<numRows;i++){
        const nums = [1]
        for(let j=1;j<=i;j++){
            const length = answerArray.length
            const target = answerArray[length-1]

            nums.push((target[j-1] ?? 0) + (target[j] ??0))
        }
        answerArray.push(nums)
    }

    return answerArray
};