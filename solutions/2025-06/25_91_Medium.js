// LeetCode 91. Decode Ways
// https://leetcode.com/problems/decode-ways/
var numDecodings = function(s) {
    if(s.startsWith('0')) return 0
    const max = 26
    const min = 1
    const length = s.length
    const answerArray = Array.from({length}).fill(0)
    answerArray[0] = 1
    for(let i=1;i<length;i++){
        const countUsingIthAlone = s[i] !== '0' ? answerArray[i-1] : 0
        if(s[i-1] !=='0' &&  +`${s[i-1]}${s[i]}`>=min && +`${s[i-1]}${s[i]}` <=max ){
                answerArray[i] = (answerArray[i-2] ?? 1) + countUsingIthAlone
        } else {
                if(countUsingIthAlone ===0){
                    break;
                }
                answerArray[i] = countUsingIthAlone
        }
    } 

    return answerArray[length-1]
};