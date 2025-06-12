// 6. Zigzag Conversion
// https://leetcode.com/problems/zigzag-conversion/

var convert = function(s, numRows) {
    if(numRows ===1 ) return s
    const sArray = s.split("")
    const answerArray = []
    const length = sArray.length

    let target = 0;
    
    for(let i=0;i<numRows;i++){
        while(target < length){
            answerArray.push(sArray[target])
            if(i===0 || i=== numRows-1) {
                target += (numRows -1) * 2
                continue;
            }
            if(target + (numRows -1 - i) * 2 < length){
                answerArray.push(sArray[target + (numRows -1 - i) * 2 ])
            }
            target += (numRows -1) * 2
        }
        target = i+1;
    }

    return answerArray.join("")
};